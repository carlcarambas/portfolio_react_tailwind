// const arr = [[], [[[1]], 1], 1, 1]

// const flattenAndSum = (array) => {
//   let sum = 0
//   const flatten = (arr) => {
//     for (const item of arr) {
//       if (Array.isArray(item)) {
//         flatten(item)
//       } else if (typeof item === 'number') {
//         sum += item
//       }
//     }
//   }
//   flatten(array)
//   return sum
// }

// console.log(flattenAndSum(arr)) // Output should be 4

// const ff = (numArr) => {
//   let allNum = 0
//   for (const num of numArr) {
//     if (typeof num === 'number') {
//       allNum += num
//     } else {

//     }
//   }
// }

// const strr = 'aaabbcaflkdgjoqookgnalgpooo';

// const mostFrequentChar = (str) => {
//   const charCount = {};
//   let maxChar = '';
//   let maxCount = 0;

//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//     if (charCount[char] > maxCount) {
//       maxChar = char;
//       maxCount = charCount[char];
//     }
//   }

//   return maxChar;
// }

// console.log(mostFrequentChar(strr)); // Output should be 'o'

const arr = [[], [[[1]], 1], 1, 1, [[[[[[[1], 1]]]]], 1]]

const addArr = (numArr, total) => {
  let totalNum = total || 0
  for (const num of numArr) {
    if (typeof num === 'number') {
      totalNum += num
    } else {
      totalNum = addArr(num, totalNum)
    }
  }
  return totalNum
}

console.log(addArr(arr))
