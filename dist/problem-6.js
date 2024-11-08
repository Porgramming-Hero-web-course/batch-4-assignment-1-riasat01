"use strict";
{
    const updateProfile = (profile, updates) => {
        let key;
        for (key in updates) {
            if (updates[key] !== undefined) {
                profile[key] = updates[key];
            }
        }
        return profile;
    };
    // Sample Input :
    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, {name: `Boob`, email: `abf`, age: 23}));
    // Sample Output:
    // {
    //   name: "Alice",
    //   age: 26,
    //   email: "alice@example.com"
    // }
}
