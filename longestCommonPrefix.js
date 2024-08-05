// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  // If the input array is empty, return an empty string
  if (strs.length === 0) return "";

  // Initialize the result to the first string in the array
  let result = strs[0];

  // Iterate over the remaining strings in the array
  for (let i = 1; i < strs.length; i++) {
    // While the current string does not start with the result string
    while (strs[i].indexOf(result) !== 0) {
      // Remove the last character from the result string
      result = result.slice(0, -1);
      // If the result string is now empty, return an empty string
      if (result === "") return "";
    }
  }

  // Return the result string
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
