let user = {
  name: "John",
  go: function () {
    alert(this.name);
  },
}

(user.go)(); //ได้ alert คำว่า John ออกมา