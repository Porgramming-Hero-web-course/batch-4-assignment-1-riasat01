{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    type Partial = {
        [key in keyof Profile]?: Profile[key];
    }

    const updateProfile = (profile: Profile, updates: Partial): Profile => {
        let key : keyof Profile;
        for (key in updates) {
            if (updates[key] !== undefined) {
                (profile[key] as string | number) = updates[key] as string | number;
            }
        }
        return profile;
    }
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