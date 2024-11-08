"use strict";
{
    function validateKeys(obj, keys) {
        for (const key of keys) {
            if (typeof obj === `object` && obj !== null && !(key in obj)) {
                return false;
            }
        }
        return true;
    }
    // Sample Input:
    // const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"]));
    // Sample Output:
    // true;
}
