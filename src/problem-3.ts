{
    const countWordOccurrences = (sentence: string, word: string) : number => {
        let wordCounter : number = 0;
        const wordArray : string[] = sentence.toLowerCase().split(' ');
        for (const wd of wordArray){
            if(wd.includes(word)){
                ++wordCounter;
            }
        }
        return wordCounter;
    }
    // Sample Input:
    // const x : number = countWordOccurrences("I lotypescRipTve typescript", "typescript");
    // console.log(x);
    // Sample Output:
    // 1;
}