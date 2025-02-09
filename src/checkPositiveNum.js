/**
 * Here the problem is just check the number is
 * whether positive or negative
 *
 * @author Meganathan
 */


function isPositive(number) {

    if (number >= 0) {
        return "Negative";
    }
    return "Positive";
}

console.log(isPositive(2))