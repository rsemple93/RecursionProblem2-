/* Compute the sum of an array of integers. */

let integers =[2, 5, 6, 9, 12]
let sum = 0

for(i = 0; i < integers.length; i++) {
	sum = sum + integers[i];
}

console.log(sum);
// Output is 34