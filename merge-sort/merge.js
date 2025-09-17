const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

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

console.log(merge(arr1, arr2));
