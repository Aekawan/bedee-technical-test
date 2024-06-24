function longestCommonPrefix(str) {
  // If the input array is empty, return an empty string
  if (str.length === 0) return "";
  // Call the helper function
  return longestCommonPrefixHelper(str, 0, str.length - 1);
}

function longestCommonPrefixHelper(str, left, right) {
  // If the left and right pointers are the same, return the element at that index
  if (left === right) {
    return str[left];
  } else {
    // Find the middle index
    let mid = Math.floor((left + right) / 2);
    // Recursively call the function on the left and right halves of the array
    let lcpLeft = longestCommonPrefixHelper(str, left, mid);
    let lcpRight = longestCommonPrefixHelper(str, mid + 1, right);
    // Return the common prefix of the left and right halves
    return commonPrefix(lcpLeft, lcpRight);
  }
}

function commonPrefix(left, right) {
  // Find the minimum length of the two strings
  let minLength = Math.min(left.length, right.length);
  // Loop through the strings and compare the characters
  for (let i = 0; i < minLength; i++) {
    // If the characters don't match, return the substring up to that point
    if (left[i] !== right[i]) {
      // Return the substring up to the current index
      return left.substring(0, i);
    }
  }

  // Return the substring up to the minimum length
  return left.substring(0, minLength);
}

// Test cases "flower", "flow", "flight"
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"

// Test cases "dog", "racecar", "car"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
