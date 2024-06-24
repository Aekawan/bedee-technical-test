function longestCommonPrefix(strs) {
  // If the input array is empty, return an empty string
  if (strs.length === 0) return "";

  // Set the first element of the array as the prefix
  let prefix = strs[0];

  // Loop through the array
  for (let i = 1; i < strs.length; i++) {
    // Check if the prefix is in the current element
    while (strs[i].indexOf(prefix) !== 0) {
      // If not, remove the last character from the prefix
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === "") return "";
    }
  }

  // Return the prefix
  return prefix;
}

// Test cases "flower", "flow", "flight"
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"

// Test cases "dog", "racecar", "car"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
