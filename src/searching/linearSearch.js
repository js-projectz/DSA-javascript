/**
 * Here the code we find the element
 * in the array there or not and time 
 * complexity is O(n);
 * 
 * @author meganathan
 * 
 */

function linearSearc(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;

};

const nums = [1, 2, 3, 4, 5, 6];
const target = 2;

const result = linearSearc(nums, target);

if (result !== -1) {
    console.log('element is found', result);
}
else {
    console.log('Element is not found');

};
