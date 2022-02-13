
const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort([987,9,8,7,6,5,4,3,2,1,0]))