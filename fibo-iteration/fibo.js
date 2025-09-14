function fibs(n) {
  const result = [];
  if (n === 1) {
    result[0] = 0;
  }
  if (n === 2) {
    result[0] = 0;
    result[1] = 1;
  }

  for (let i = 2; i < n; i++) {
    result[0] = 0;
    result[1] = 1;
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

console.log(fibs(13));
