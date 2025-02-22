/**
 * Here we are using the binary search 
 * find the mid and reduce the number of unwanted
 * loops time complexity is O(log(n));
 * 
 * @author meganathan
 * 
 */

function binarySearch(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log('mid', mid);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }

    };
    return -1;

};

const nums = [1, 2, 3, 4, 5];
const target = 4;
console.log(binarySearch(nums, target));



