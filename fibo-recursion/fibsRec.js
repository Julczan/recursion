function fibsRec(n) {
  if (n <= 1) {
    return n;
  }

  return fibsRec(n - 1) + fibsRec(n - 2);
}

function display(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fibsRec(i));
  }
  return result;
}

console.log(display(4));
