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


const runningSum = arr => {

  // Your code here 
};

const evenNumOfChars = arr => {

  // Your code here 
};

const smallerThanCurr = arr => {

  // Your code here 

};

const twoSum = (arr, target) => {

  // Your code here 
};

const secondLargest = arr => {

  // Your code here 
};

const shuffle = (arr) => {

  // Your code here 
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
