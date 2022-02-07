
const binarySearch = (sortedArray, item) => {
	let start = 0;
	let end = sortedArray.length - 1;
	let i;
	for (i = 0; start <= end; i++) {
		const middle = Math.floor((start + end) / 2);
		if (sortedArray[middle] === item) {
			return `Found item at ${middle} index, with ${i} attempts`
		}
		else if (sortedArray[middle] < item) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}
	return `Nothing found with ${i} attempts`
}

console.log(binarySearch([1,2,3,4,5,6], 5))