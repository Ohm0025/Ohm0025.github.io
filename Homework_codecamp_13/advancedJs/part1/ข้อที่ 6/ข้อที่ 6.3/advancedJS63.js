let calculator = {
  read() {
    this.int1 = Number(prompt("enter int01 : "));
    this.int2 = Number(prompt("enter int02 : "));
  },
  sum() {
    return this.int1 + this.int2;
  },
  mul() {
    return this.int1 * this.int2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
