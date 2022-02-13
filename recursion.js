
const sumArrWithRecursion = (arr) => {
    if (arr.length === 0) {
        return 0
    } else {
        return arr[0] + sumArrWithRecursion(arr.slice(1))
    }
}

const countList = (list) => list.length === 0 ? 0 : 1 + countList(list.slice(1));






