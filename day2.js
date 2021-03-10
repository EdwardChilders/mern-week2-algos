// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,12], 16)

// O(n2)

// sum = 16
// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums2(arr, k) {
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
      let rightSum = arr[i];
      for (let rightI = i + 1; rightI < arr.length; rightI++) {
          rightSum += arr[rightI];
          if (rightSum == k) {
              finalArray.push(arr.slice(i, rightI + 1));
          }
      }
  }
  return finalArray;
}

console.log(findConsqSums2([2, 5, 3, 6, 7, 0, 0, 23, 12], 16));