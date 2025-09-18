const arr1 = [2];
const arr2 = [1];

const unsortedArr = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, mid);
  const rightSide = arr.slice(mid);

  if (arr.length === 1) {
    return arr;
  }

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(A, B) {
  let result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      result[k++] = A[i++];
    } else {
      result[k++] = B[j++];
    }
  }
  for (i; i < A.length; i++) {
    result[k++] = A[i];
  }
  for (j; j < B.length; j++) {
    result[k++] = B[j];
  }
  return result;
}

console.log(mergeSort(unsortedArr));
