/* Compute the sum of an array of integers. */
const sum = function(arr) {
	if (arr.length <= 0) return 0;
	return arr.pop() + sum(arr);
}

console.log('The sum is: ' + sum([2, 5, 6, 10]));
