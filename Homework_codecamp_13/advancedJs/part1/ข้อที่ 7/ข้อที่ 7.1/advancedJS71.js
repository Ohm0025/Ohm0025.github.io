function Calculator(){
    this.read = function(){
        this.int1 = Number(prompt('Enter int1 : '));
        this.int2 = Number(prompt('Enter int2 : '));
    };
    this.sum = function(){
        return this.int1 + this.int2;
    };
    this.mul = function(){
        return this.int1 * this.int2;
    }
}

let calculator = new Calculator();

calculator.read();
alert(calculator.sum());
alert(calculator.mul());