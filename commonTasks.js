"use strict"

// string reverse (in place)

// Input: 'hello'
// Output: 'ollel'

function reverseString(str) {
  const arr = str.split('');
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (start === end) break;
    let temp = arr[i];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr.join('');
}

// remove duplicates in the array (in place)

// Input: removeDuplicates([1, 1, 2, 3, 4, 1, 5, 1, 4, 2])
// Output: [3, 5]

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

// swap elements in an array (in place)

// Input: swapTwoElements(['dog', 'cat', 'whale'], 0, 2)
// Output ['whale', 'cat', 'dog']

function swapTwoElements(arr, index1, index2) {
  const temp = arr[index1];
  arr.splice(index1, 1, arr[index2]);
  arr.splice(index2, 1, temp);
  return arr;
}

// remove all occurrences in an array (in place)

// Input: removeAllOccurrences([1, 2, 2, 3, 4, 1, 2], 2)
// Output: [1, 3, 4, 1]

function removeAllOccurrences(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

// get the object with frequecy of words occurencies in an array 

// Input: ['lol', 'cat', 'dog', 'lol', 'dog']
// Output: Map(3) { 'lol' => 2, 'cat' => 1, 'dog' => 2 }

function wordFrequencyCounter(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1)
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
}


// group objects by their name

// Input:
// const objects = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Apple' },
//   { id: 4, name: 'Orange' },
//   { id: 5, name: 'Banana' },
// ];
// Output:
// Map {
//   'Apple' => [ { id: 1, name: 'Apple' }, { id: 3, name: 'Apple' } ],
//   'Banana' => [ { id: 2, name: 'Banana' }, { id: 5, name: 'Banana' } ],
//   'Orange' => [ { id: 4, name: 'Orange' } ]
// }

function groupObjects(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i].name)) {
      map.set(arr[i].name, [...map.get(arr[i].name), arr[i]])
    } else {
      map.set(arr[i].name, [arr[i]]);
    }
  }

  return map;
}

// group anagrams (easy level)

// Input: ['cat', 'dog', 'tac', 'god', 'act']
// Output: 
// Map {
//   'act' => [ 'cat', 'tac', 'act' ],
//   'dgo' => [ 'dog', 'god' ]
// }

function anagramGroups(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let sortedString = [...arr[i]].sort().join('');
    if (map.has(sortedString)) {
      map.set(sortedString, [...map.get(sortedString), arr[i]]);
    } else {
      map.set(sortedString, [arr[i]])
    }
  }

  return map;
}

// find the longest consecutive sequence of numbers in an array
// O(n log n) approach (because I sorted my array here, but I think it's possible to avoid it...)

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4

// Input: [0, 10, 6, 9, 7, 8, 2, 1]
// Output: 4

function getTheLongestConsecutiveSequence(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let result = 0;
  let count = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] === sortedArr[i] + 1) {
      count++;
    } else {
      result = result > count ? result : count; 
      count = 0;
    }
  }

  return result;
}

// find the longest consecutive sequence of numbers in an array
// O(n) approach

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4

// Input: [0, 10, 6, 9, 7, 8, 2, 1]
// Output: 4

function getTheLongestConsecutiveSequence2(arr) {
  const set = new Set(arr);
  let longestSequence = 0;
  let count = 0;

  for (let num of set) {
    let elemOfSequence = num;
    while(set.has(elemOfSequence + 1)) {
      count++;
      elemOfSequence++;
    }
    longestSequence = longestSequence > count ? longestSequence : count;
    count = 0;
  }

  return longestSequence;
}

// find duplicates in an array 
// O(n) approach

// Input: [1, 2, 3, 2, 4, 3, 5, 6, 1]
// Output: [1, 2, 3]

function findDuplicates(arr) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).includes(arr[i])) {
      set.add(arr[i]);
    }
  }

  return [...set];
}

// group anagrams (medium level)
// O(n * m * log(m)) approach

// Input: ["eat", "tea", "tan", "ate", "ate", "nat", "bat"]
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

function groupAnagrams(arr) {
  const map = new Map();

  for (const word of arr) {
    let sortedString = [...word].sort().join('');
    if (map.has(sortedString)) {
      map.get(sortedString).add(word);
    } else {
      map.set(sortedString, new Set([word]))
    }
  }

  return Array.from(map.values(), (set) => [...set]);
}

// The task from LeetCode (I just really like it)

// You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

// 0 <= i < j < nums.length
// nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.

// Input: nums = [42,11,1,97]
// Output: 2
// Explanation: The two pairs are:
//  - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
//  - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.

function countNicePairs(nums) {
  function reverseNumber(num) {
      let reversed = 0;
      while (num > 0) {
          reversed = reversed * 10 + num % 10;
          num = ~~(num / 10);
      }
      return reversed;
  }

  const reversedMap = new Map();
  const diffMap = new Map();

  for (let i = 0; i < nums.length; i++) {
      if (!reversedMap.has(nums[i])) {
          let reversedNum = reverseNumber(nums[i]);
          reversedMap.set(nums[i], reversedNum);
      } 

      let diff = reversedMap.get(nums[i]) - nums[i];

      if (diffMap.has(diff)) {
          diffMap.set(diff, diffMap.get(diff) + 1)
      } else {
          diffMap.set(diff, 1);
      }
  }

  const result = Array.from(diffMap.values(), (num) => num * (num - 1) / 2).reduce((acc, pair) => acc += pair, 0);

  return result % (10 ** 9 + 7);
};







let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

// Error: keys.push is not a function
keys.push("more");


