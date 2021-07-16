function formFibonacci(n) {
  let fiboArray = new Array(n + 2);
  fiboArray[0] = 0;
  fiboArray[1] = 1;

  for (var i = 2; i <= n; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
  }
  return fiboArray[n];
}

function formFibonacciWithoutExtraSpace(n) {
  let a = 0;
  let b = 1;
  let c;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(formFibonacciWithoutExtraSpace(9));
