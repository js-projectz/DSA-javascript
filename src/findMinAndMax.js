/**
 * Find the max among three number and
 * return the max number
 *
 * @author megnathan
 */

function checkMaxNumber(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3 ) {
        return num2;
    }
    return num3
}

console.log(checkMaxNumber(1, 3, 4));