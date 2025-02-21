/**
 * Here the problem is to find the
 * number prime or not 
 * 
 * @author Meganathan
 */


function isPrime(n) {

    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
        return;
    }
    else {
        for (var i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime ? `${n} is prime` : 'number is not prime';
};

const n = 8;
console.log(isPrime(n));
