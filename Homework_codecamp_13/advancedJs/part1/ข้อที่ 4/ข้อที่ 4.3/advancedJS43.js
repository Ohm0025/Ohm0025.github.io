let fruit = {};
let key = prompt("Enter fruit name : ");
while (key !== "stop") {
  let value = prompt("Enter fruit number : ");
  if (Number(value) > 1) {
    key += "s";
  }
  fruit[key] = value;
  key = prompt("Enter fruit name : ");
}
console.log(fruit);
