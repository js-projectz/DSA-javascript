/**
 * Here the problem we have to count
 * the number in digit and
 * return the count
 *
 * @author Meganathan
 */



function countNumberInDigits(num) {

    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        console.log(num);

        count++;
    }
    return count;
}

console.log(countNumberInDigits(20));

