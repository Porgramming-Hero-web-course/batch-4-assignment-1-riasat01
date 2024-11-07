{
    const getProperty = <A, B extends keyof A> (a: A, b: B) => {
        return a[b]
    }
    // Sample Input:
    const person = { name: "Alice", age: 30, hobby: `football` };
    console.log(getProperty(person, "hobby"));

    // Sample Output:
    // Alice;
}