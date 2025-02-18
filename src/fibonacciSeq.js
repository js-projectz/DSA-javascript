/**
 * Here the problem is find the
 * fibonacciseq 
 * 
 * @author Meganathan
 * 
 */


function fibo(n) {

    if (n <= 1) return n;

    let pre = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = pre + curr;
        pre = curr;
        curr = next;
    }
    return curr;
};

const num = 5;
console.log(fibo(num));

