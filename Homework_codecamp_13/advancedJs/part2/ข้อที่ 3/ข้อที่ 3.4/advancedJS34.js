function getMaxSubSum(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] > ans) {
      ans = arr[i] + arr[i + 1];
    }
  }
  let ans1 = 0;
  let ram = [...arr];
  let ram1 = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let ans2 = 0;
    for (let d of arr) {
      ans2 += d;
    }
    if (ans2 > ans1) {
      ans1 = ans2;
    }
    arr.pop();
  }
  ram1.reverse();
  for (let i = 0; i < ram1.length; i++) {
    let ans3 = 0;
    for (let d of ram1) {
      ans3 += d;
    }
    if (ans3 > ans1) {
      ans1 = ans3;
    }
    ram1.pop();
  }
  for (let s of ram) {
    if (s > ans1) {
      ans1 = s;
    }
  }
  return ans > ans1 ? ans : ans1;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
