/**
 * Here we are using the recursion
 * and solve the problem Fibonacci Sequence
 * 
 * @author Meganathan 
 */

function fib(n) {

    // base condition
    if (n === 0 || n === 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));
