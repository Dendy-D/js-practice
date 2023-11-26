class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items.length = 0;
  }
}

// O(n) solution, It was implemented without using stack

function balancedParentheses(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')') {
      if (result - 1 >= 0) {
        result--;
      } else {
        return false
      }
    }
    if (str[i] === '(') {
      result++
    }
  }

  return result === 0;
}

// O(n) solution, It was implemented with using stack

function balancedParentheses2(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}

function findNextGreaterElements(arr) {
  const stack = new Stack();
  const result = Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    // if 
  }

  return result;
}

const input = [4, 6, 3, 2, 8, 1];

console.log(findNextGreaterElements(input)) // [6, 8, 8, 8, -1, -1]
