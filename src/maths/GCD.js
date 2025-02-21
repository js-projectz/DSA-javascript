/**
 * Here the math problem find the GCD
 * in a and b using recursion
 * 
 * @param{number}n
 * @author Meganathan
 */

function gcd(a, b) {

    if (b === 0) return a;

    return gcd(b, a % b); // here we are using Euclid’s Algo
};

console.log(gcd(10, 12));
