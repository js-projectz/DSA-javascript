/**
 * Here the problem we solve the 
 * factorial 
 * 
 * @author meganathan
 */

var n = 5;
var fact = 1;

while (n >= 1) {

    fact *= n;
    n--;
};

function findFact(n) {

    if (n <= 1) return 1;

    return findFact(n - 1) * n;

}

console.log(findFact(5));

