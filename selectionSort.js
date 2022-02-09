const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const selectionSort = (arr) => {
    const count = arr.length;
    const array = arr;
    const newArr = [];
    let i;
    for (i = 0; i < count; i++) {
        const smallest = findSmallest(array);
        newArr.push(array[smallest]);
        array.splice(smallest, 1);
    }
    return `sorted array: ${newArr}, with ${newArr.length} items, it took ${i} attempts`;
}

console.log(selectionSort([999,678,167, 894, 1058]))