//สร้าง method ต่อ string ใน obj
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.str = prompt('Adding value : ');
        this.value += this.str;
        return this;
    };
}
let acc = new Accumulator("hello");
acc.read().read().read();

console.log(acc.value);