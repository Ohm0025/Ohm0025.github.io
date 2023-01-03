let obj1 = {};
let obj2 = { name: "ohm" };

function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}
console.log(isEmpty(obj1)); //ถ้าไม่มี prop คืน false
console.log(isEmpty(obj2)); //ถ้ามี prop คืน true
