/**
 * Here i going to use the
 * bubble sort like sorting the using 
 * bubble sort time complexity is O(n2)
 * 
 * @param {Array} nums 
 * @author Meganathan
 * 
 */


function bubbleSort(nums) {

    if (!nums) return [];

    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {

                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    return nums;

};

const nums = [9, 8, 5, 2, 1];
console.log(bubbleSort(nums));
