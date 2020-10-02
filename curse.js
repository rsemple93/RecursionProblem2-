/* Compute the sum of an array of integers. */
function sumOfIntegers(arr) {
	let sum = 0 
	for(i = 0; i < arr.length; i++) {
	sum = sum + arr[i];
}
	console.log('The sum is: ' + sum)
}

sumOfIntegers([2, 5, 6, 9, 13]);



