/**
 * Here the problem is to 
 * find whether number is palindrome
 * or not 
 * 
 * @param {number} num 
 * @author Meganathan
 */

function isPalindrome(num) {

    if (num <= 0) return false;

    var reverseStr = '';

    while (num > 0) {
        
        reverseStr += num % 10
        num /= 10;
    }


    return String(num) === reverseStr;
};

const number = 121;
console.log(isPalindrome(number));


