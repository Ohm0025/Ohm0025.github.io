function sumInput() {
  let arr = [];
  let sum = 0;

  while (true) {
    let input = prompt("put some value : ");
    if (input === null || isNaN(+input) || input.trim() === "") break;
    arr.push(+input);
  }

  console.log(arr);
  arr.forEach((e) => (sum += e));
  return sum;
}

console.log(sumInput());
