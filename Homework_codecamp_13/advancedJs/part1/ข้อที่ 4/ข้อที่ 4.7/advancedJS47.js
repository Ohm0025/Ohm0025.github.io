function sum(obj) {
  let ans = 0;
  for (let e in obj) {
    ans += obj[e];
  }
  return ans;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sum(salaries));
