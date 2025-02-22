/**
 * Here we are using the selection sort 
 * for sorting the array and the time 
 * complexity is O(n2);
 * 
 * @author meganathan
 */


function selectionSort(nums) {

    for (let i = 1; i < nums.length; i++) {

        let curr = nums[i];
        let pre = i - 1;


        while (pre >= 0 && nums[pre] > curr) {
            nums[pre + 1] = nums[pre]; // 
            pre--;
        }
        nums[pre + 1] = curr;
    }
    return nums;
};

const arr = [12, 11, 13, 5, 6];
console.log(selectionSort(arr));


