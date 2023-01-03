function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // alert ค่าว่าง ออกมา เพราะ this ชี้ไปที่ global obj (window)
