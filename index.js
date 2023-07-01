function hasTargetSum(array, target) {
  const complements = new Set();

  for (let num of array) {
    if (complements.has(num)) {
      return true;
    }

    const complement = target - num;
    complements.add(complement);
  }

  return false;
}
/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n), where n is the size of the input array
*/

/* 
  Add your pseudocode here
  1. Create an empty set called "complements".
  2. Iterate through each element "num" in the "array".
     1. Check if the current "num" is present in the "complements" set.
        - If it is, return true (a pair that sums up to the target exists).
     2. Calculate the complement value by subtracting the current "num" from the "target".
     3. Add the complement value to the "complements" set.
  3. If no pair is found after iterating through all elements, return false.
*/

/*
  Add written explanation of your solution here
  - The function uses a set to store the complement values needed to reach the target sum.
  - It iterates through each element in the array and checks if the complement of the current element exists in the set.
  - If a complement is found, it means that a pair of elements exists in the array that sums up to the target.
  - If the loop completes without finding a pair, the function returns false.
  - The function's logic relies on the fact that a + b = target if and only if a = target - b. By storing the complements in a set, we can efficiently check if a complement exists while iterating through the array.
  - The function has a time complexity of O(n) because it iterates through the array once, where n is the size of the array.
  - The space complexity of the function is O(n) because, in the worst case, all elements of the array could have unique complements, resulting in all elements being stored in the set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
