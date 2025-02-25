function insertionSort(nums) {

    for (let i = 1; i < nums.length; i++) {

        let key = arr[i];
        let j = i - 1; // pointing to previous number

        while (arr[j] > key && i >= 0) {

            // shifting the code
            arr[j + 1] = arr[j];
            j -= 1; // check the previous number is smaller than current number
        }

        arr[j + 1] = key;
    }

    return nums;
}


let arr = [5, 3, 8, 4, 2];
console.log("Sorted array:", insertionSort(arr));
