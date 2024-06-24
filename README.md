# BeDee Technical Test

# Longest Common Prefix

This repository contains two implementations of finding the longest common prefix string among an array of strings.

## Implementations

1. **Simple Way**
2. **Divide and Conquer Way**

## Prerequisites

- Ensure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).

## Running the Code

## 1. Simple Way

```base
  node technical-test-simple.js
```

```javascript
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
```

## Explanation

- Initialization: Start with the first string as the initial prefix.

- Iterate Through the Array: For each subsequent string, check if the current prefix is a prefix of the string.

- Adjust the Prefix: If the current prefix is not found at the start of the string, shorten the prefix by removing characters from the end one by one until it matches the start of the string.

- Return the Prefix: If no common prefix is found, return an empty string. Otherwise, return the longest common prefix found.

## 2. Divide and Conquer Way

```base
  node technical-test-divide-and-conquer.js
```

```javascript
function longestCommonPrefix(strs) {
  // If the input array is empty, return an empty string
  if (strs.length === 0) return "";
  // Call the helper function
  return longestCommonPrefixHelper(strs, 0, strs.length - 1);
}

function longestCommonPrefixHelper(strs, left, right) {
  // If the left and right pointers are the same, return the element at that index
  if (left === right) {
    return strs[left];
  } else {
    // Find the middle index
    let mid = Math.floor((left + right) / 2);
    // Recursively call the function on the left and right halves of the array
    let lcpLeft = longestCommonPrefixHelper(strs, left, mid);
    let lcpRight = longestCommonPrefixHelper(strs, mid + 1, right);
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
```

## Explanation

- Base Case Handling: The longestCommonPrefix function first checks if the array is empty. If it is, it returns an empty string.

- Helper Function: The longestCommonPrefixHelper function is called with the indices of the left and right boundaries of the array.

- Recursive Division: The array is split into two halves by calculating the midpoint. The function then recursively finds the longest common prefix for the left and right halves.

- Merging Results: The commonPrefix function compares the two prefixes character by character and returns the common part.

- Result: The longest common prefix for the entire array is returned by combining the results from the recursive calls.
