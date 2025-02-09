/**
 * Here the problem is Count the number
 *  of vowels in a string.
 * 
 * @author Meganathan
 */


function countVowels(str) {

    if (str.length === 0) return 0;

    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello world")); // 3

