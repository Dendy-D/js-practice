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

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.slice(i + 1).includes(arr[i])) {
//       console.log(1);
//     }
//   }
// }

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([1, 1, 1, 1, 1])); // Output: [1]