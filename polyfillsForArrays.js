const arr = [1, 2, 3];

// push
Array.prototype.myPush = function() {
  for (let i = this.length, j = 0; j < arguments.length; i++, j++) {
    this[i] = arguments[j];
  }
  return this.length;
}


// pop
Array.prototype.myPop = function() {
  const theLastElem = this[this.length - 1];

  this.length -= 1;
  
  return theLastElem;
}


// shift 
Array.prototype.myShift = function() {
  const theFirstElem = this[0];

  for (let i = 0; i < this.length; i++) {
    if (this[i + 1]) {
      this[i] = this[i + 1];
    }
  }

  this.length -= 1;

  return theFirstElem;
}

// unshift 
Array.prototype.myUnshift = function() {
  const argLength = arguments.length;

  if (!argLength) return this.length;

  const initialArrayLength = this.length;
  
  for (let i = initialArrayLength - 1; i >= 0; i--) {
    this[i + argLength] = this[i];
  }

  for (let i = 0; i < argLength; i++) {
    this[i] = arguments[i];
  }

  this.length = Object.keys(this).length

  return this.length;
}

// map
Array.prototype.myMap = function(callback, context=this) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${typeof callback} ${callback} is not a function`);
  }

  const res = [];

  for (let i = 0; i < context.length; i++) {
    res.push(callback(context[i], i, context));
  }

  return res;
}

// filter
// Array.prototype.myFilter = function(callback, context = this) {
//   for (let i = 0; i < context.length; i++) {

//   }
// }



arr.myFilter((elem) => elem > 1);
// const test1 = arr.myUnshift(0);
console.log(arr);
// console.log(test1);
// const newArr = arr.myMap(1);
// console.log(newArr);

// const test = arr.myPush(4, {lol: 'lol'});
// const test = arr.myPop();
// const test = arr.myShift();

// const test = {
//   name: 'Dan',
//   job: 'Software Developer',
// };

// Array.prototype.myUnshift.call(test, 0);

// console.log(test);



