let arr = [32, 21, 39, 76, 12, 10, 23, 5]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    console.log([...quickSort(left), pivot, ...quickSort(right)]);
}