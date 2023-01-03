let cl = console.log;
function unique(arr) {
  return Array.from(new Set(arr));
}
let arr = [
  "hare",
  "krishna",
  "hare",
  "krishna",
  "krishna",
  "krishna",
  "hare",
  "hare",
  ":-o",
];
cl(unique(arr));
