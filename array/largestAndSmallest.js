function largestAndSmallestNum(arr) {
  const [firstVal = 0] = arr;
  let max = firstVal;
  let min = firstVal;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return [min, max];
}

module.exports.largestAndSmallestNum = largestAndSmallestNum;