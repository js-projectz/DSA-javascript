/**
 * Sovle the maths fact using
 * recursion
 * 
 * @param {number} n 
 * 
 * @author Meganathan
 */


function fact(n) {

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fact(n - 1);
};

const n = 4;
console.log(fact(n));
