// string reverse (in place)

function reverseString(str) {
  const arr = str.split('');
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (start === end) break;
    let temp = arr[i];
    arr[start] = arr[end]
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
        j--
      }
    }
  }
  return arr;
}
