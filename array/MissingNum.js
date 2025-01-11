//חיפוש לפי מערך מונים

function missingNumArrayCounting(arr) {
  let missingNum = 0;
  const newArr = Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i] - 1] = 1;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 0) missingNum = i + 1;
  }
  return missingNum;
}


// חיפוש בעזרת מיון

function missingNumWithSort(arr) {
  let missingNum = 0;
  const sortedArray = arr.slice(0).sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length+1; i++) {
    if (sortedArray[i] !== i + 1) {
      missingNum = i + 1;
      break;
    }
  }
  return missingNum;
}

module.exports.missingNumWithSort = missingNumWithSort;
module.exports.missingNumArrayCounting = missingNumArrayCounting;

//const arr = [1, 3, 5, 2, 6, 7, 9, 8, 20, 11, 15, 14, 13, 12, 4, 16, 17, 18, 19];

