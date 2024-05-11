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

const secondLargest = arr => { // Space complexity: O(n), time complexity: O(n)
  // const arr = [4, 2, 3, 6, 8];
  // secondLargest(arr); // => 6
  // Your code here

  let n = -Infinity;
  let index = 0;
  if (arr.length <= 1) return undefined;
  for (let i = 0 ; i < arr.length; i++) { // O(n)
    if (arr[i] > n) {
      n = arr[i];
      index = i;
    }
  }
  let newArr = arr.slice(0, index).concat(arr.slice(index + 1));
  let m = -Infinity;
  if (newArr.length === 1) return newArr[0];
  for (let i = 0 ; i < newArr.length; i++) { // O(n)
    if (newArr[i] > m) {
      m = newArr[i];
    }
  }
  return m;
};

const shuffle = (arr, newArr=[]) => { // Space: O(n) ; Time: O(n)

  // Your code here
  
  // base case
  if (arr.length === 0) return newArr;

  // recursion step
  let index = Math.floor(Math.random() * arr.length); 
  newArr.push(arr[index]);
  arr = arr.slice(0, index).concat(arr.slice(index + 1));
  return(shuffle(arr, newArr))


  // step1: loop through the original array and find the current element;
  // step2: for that current element, assign a random index into the new array;
  // step3: lock the newly created index 
  // step4: repeat the same process for the next element in the original array
};


console.log(shuffle([1,2,3]))


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
