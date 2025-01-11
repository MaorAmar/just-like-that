/*function mergeSortedArray(arr1, n, arr2, m) {
  let num = 0,
    i = 0,
    j = 0;
  const newArr = Array(n + m).fill(0);
  arr1 = arr1.slice(0, n);
  arr2 = arr2.slice(0, m);
  while (num < n + m) {
    if (arr1[i] === undefined && arr2[j] === undefined) {
      break;
    }
    if (
      (arr1[i] !== undefined && arr2[j] === undefined) ||
      arr1[i] <= arr2[j]
    ) {
      newArr[num] = arr1[i];
      num++;
      i++;
    }
    if ((arr1[i] === undefined && arr2[j] !== undefined) || arr1[i] > arr2[j]) {
      newArr[num] = arr2[j];
      num++;
      j++;
    }
  }
  return newArr;
}
*/

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let index = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[index] = nums1[i];
      index--;
      i--;
    } else {
      nums1[index] = nums2[j];
      index--;
      j--;
    }
  }
  while (j >= 0) {
    nums1[index] = nums2[j];
    j--;
    index--;
  }
};

const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
merge(arr1, 3, arr2, 3);
console.log(arr1);
