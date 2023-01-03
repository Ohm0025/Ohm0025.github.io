let cl = console.log;
//2.1
array1 = [1, 2, 30, 400];
array2 = array1.filter((item) => item > 10);
cl(array2);
//2.2
array1 = [1, 2, 3, 4];
array2 = array1.filter((item) => item % 2 !== 0);
cl(array2);
//2.3
array1 = [1, "1", 2, {}];
array2 = array1.filter((item) => typeof item === "number");
cl(array2);
//2.4
array1 = ["apple", "banana", "orange", "pineapple", "waternelon"];
array2 = array1.filter((item) => item.length > 6);
cl(array2);
//2.5
array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];
array2 = array1.filter((item) => item.age < 18);
cl(array2);
//2.6
array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];
array2 = array1.filter((item) => item.age !== 32);
cl(array2);
//2.7
array1 = [1, -3, 2, 8, -4, 5];
array2 = array1.filter((item) => item > 0);
cl(array2);
//2.8
array1 = [1, 3, 4, 5, 6, 7, 8];
array2 = array1.filter((item) => item % 3 === 0);
cl(array2);
//2.9
array1 = ["peach", 1, -3, "2", {}, []];
array2 = array1.filter((item) => typeof item == "string");
cl(array2);
//2.10
array1 = ["APPLE", "appLE", "PEACH", "PEach"];
array2 = array1.filter((item) => item == item.toUpperCase());
cl(array2);
//2.11
array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];
array2 = array1.filter((item) => item.birth.split("-")[1] == 10);
cl(array2);
//2.12
array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];
array2 = array1.filter((item) => item.birth.split("-")[0] < 2000);
cl(array2);
