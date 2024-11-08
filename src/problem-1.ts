{
    const sumArray = (nums: number[]): number => {
        return nums.reduce((tot: number, crnt: number) => tot + crnt, 0)
    }
    
    // Sample Input:
    // const x: number = sumArray([1, 2, 3, 4, 5]);
    // console.log(x);
    // Sample Output:
    // 15;
}