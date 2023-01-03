function checkSpam(string) {
  let str = string.toLowerCase();
  return str.includes("viagra") || str.includes("xxx");
}

console.log(checkSpam("goxxx"));
console.log(checkSpam("gocmeviagrajpiv"));
console.log(checkSpam("gocmeviagajpiv"));
