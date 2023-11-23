// string reverse (in place)

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

function swapTwoElements(arr, index1, index2) {
  const temp = arr[index1];
  arr.splice(index1, 1, arr[index2]);
  arr.splice(index2, 1, temp);
  return arr;
}

// remove all occurrences in an array (in place)

function removeAllOccurrences(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

// get the object with frequecy of words occurencies in an array 

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

// group anagrams

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
