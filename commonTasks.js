// string reverse

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

