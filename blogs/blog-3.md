## Type guard in typescript
Typescript is a superset of javascript. As we all know javascript is a scripting language used to make a website interactive. However, javascript has a major issue. It is a dynamically typed language, meaning if a variable <code>let v</code> is declared in javascript it's type is determined dynamically. For example <code> let v = 1;</code>- her <code>v</code> is a number type variable. But if we re-initialize it with different types of values like <code> v = "abc"; </code> then it becomes a string type variable. This behavior can cause huge problems and unwanted bugs in our codebase. To solve this problem typescript comes into view!

Typescript is a statically typed language, that is while declaring a variable (or constant) we have to define the type of the variable. For example <code> let v : number = 1;</code>- here v is number type variable. So if we try to re-initialize it with some different type of value like <code> v = "abc"; </code> typescript will give an error. Thus it solves the type issue of javascript and makes our development process much secure.

However, there may be some cases where a variable's type may not known before runtime. For example, a function that accepts a parameter or differnet types and based on the type it retuns different things.

<code>
    const demoTypeGuard = <T>(param: T): T | undefined => {
        if (typeof param === "string") {
            console.log("This is an sting");
            return param;
        } else if (typeof param === "number") {
            console.log("The parameter is a number");
            return (param * param as T);
        } else {
            console.log("Invalid type! Please give a string or a number");
        }
    }
</code>

In the above code example <code>demotypeGuard</code> function excepts a generic type and a parameter of that type. If the parameter is of type string it simply returns the string. If the parameter is a number then the function returns the square of the number and for the rest of the types, it returns nothing (javascript default behaviour is if a function isn't returing anything it will automatically return undefined). So the above code snippet explains the type guard in typescript with a simple use case.


## Different types of type guard
1. ### <code>typeof</code>
The previously shown <code>demoTypeGuard</code> function shows and example of <code>typeof</code>
2. ### <code>instanceof</code>
<code>instanceof</code> keyword is used to check if an object is an instance of an interface or a class

<code>
    class Person {
        name: string;
        age: number;
    }

    const giveGreeting(x: Person | string) {
        if (x instanceof Person) {
            console.log(`Hello, ${x.name}!`);
        } else {
            console.log(`Hello, ${x}`);
        }
    }
</code>

3. ### <code>in</code> - keyword to check if the type is a string literal and exists as a key in an object
<code>
    interface Person {
        name: string;
        age?: number;
    }

    function greet(person: Person) {
        if ('age' in person) {
            console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
        } else {
            console.log(`Hello, ${person.name}!`);
        }
    }
</code>

4. ### <code>keyof</code> -keyword to create a union with the keys of an object type or interface
<code>
    interface Person {
        name: string;
        age: number;
    }

    type PersonKeys = keyof Person;
</code>