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

// remove duplicates (in place)

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

// swap elements in an array

function swapTwoElements(arr, index1, index2) {
  const temp = arr[index1];
  arr.splice(index1, 1, arr[index2]);
  arr.splice(index2, 1, temp);
  return arr;
}

// remove all occurrences in an array

function removeAllOccurrences(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

  