//สร้าง array ชื่อ styles ที่มี items ชื่อ "Jazz" และ "Blues"
let styles = ["Jazz" , "Blues"]

//เพิ่ม "Rock-n-Roll" ต่อท้าย
styles.push("Rock-n-Roll")

//นำค่า Classics ไปทับค่าตรงกลางของ Array
styles[Math.ceil(styles.length/2) - 1] = "Classics"

console.log(styles)

//เพิ่ม Rap และ Reggae ไปข้างหน้าของ Array
styles.unshift("Rap","Reggae")

console.log(styles)