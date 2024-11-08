"use strict";
{
    const removeDuplicates = (nums) => {
        const duplicateFreeNumbers = [];
        for (const num of nums) {
            if (!duplicateFreeNumbers.includes(num)) {
                duplicateFreeNumbers.push(num);
            }
        }
        return duplicateFreeNumbers;
    };
    // Sample Input:
    // const x:number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 11 , 101, 11])
    // console.log(x);
    // Sample Output:
    // [1, 2, 3, 4, 5]
}
