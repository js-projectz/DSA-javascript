/**
 * Here we are using the selection sort 
 * for sorting the array and the time 
 * complexity is O(n2);
 * 
 * @author meganathan
 */


function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

const arr = [12, 11, 13, 5, 6];
console.log(selectionSort(arr));


