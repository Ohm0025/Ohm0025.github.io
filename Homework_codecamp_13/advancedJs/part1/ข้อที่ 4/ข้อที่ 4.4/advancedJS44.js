//สร้าง obj เปล่าขึ้นมา
let obj = {}

//เพิ่ม prop name เข้าไปและให้ value เป็น "Sonter"
obj['name'] = 'Sonter'

//เพิ่ม prop surname เข้าไปและให้ value เป็น "Pakorn"
obj['surname'] = 'Pakorn'
console.log(obj);

//เปลี่ยน prop name เป็น Boy
obj['name'] = 'Boy';
console.log(obj);

// ลบ prop name ออกจาก obj;
delete obj['name'];
console.log(obj)