const findMinimum = arr => {
  // const arr = [7, 5, 2, 3, 4, 1];
  // findMinimum(arr); // => 1
  // Your code here
  let n = Infinity;
  if (arr.length === 0) return undefined;
  for (let i = 0 ; i < arr.length; i++) { // O(n)
    if (arr[i] < n) {
      n = arr[i];
    }
  }
  return n;
};


const runningSum = arr => { // Space: O(1), time: O(n)
  // const arr = [1,2,3,4];
  // runningSum(arr); // => [1,3,6,10]
  // Your code here
  if (arr.length === 0) return [];
  for (let i = 1 ; i < arr.length; i++) {
    arr[i] += arr[i - 1];
    }
  return arr;
};

const evenNumOfChars = arr => { // Space: O(1); time: O(n)
  // const arr = ['ab', 'abc', 'a', 'abcd'];
  // evenNumOfChars(arr); // => 2
  // Your code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      count++;
    }
  }
  return count;
};

const smallerThanCurr = arr => { // Space: O(n), time: O(n^2)
  // const arr = [8,1,2,2,3];
  // smallerThanCurr(arr); // => [4,0,1,1,3]
  // Your code here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let n = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        n++
      }
    }
    result.push(n);
  }
  return result
};

const twoSum = (arr, target) => { // Space: O(1); time: O(n^2)

  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === target) return true;
    }
  }
  return false;
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
