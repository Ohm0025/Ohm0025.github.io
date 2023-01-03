let cl = console.log;

function aclean(arr) {
  let s = new Set();

  let m = new Map();

  for (let i of arr) {
    let y = Array.from(i.toLowerCase());
    y.sort();
    s.add(y.join(""));
  }

  for (let s_i of s) {
    m.set(s_i, []);
  }

  for (let m_i of m) {
    for (let i of arr) {
      let y = Array.from(i.toLowerCase());
      y.sort();

      if (m_i[0] == y.join("")) {
        m_i[1].push(i);
      }
    }
  }
  let a = Array.from(m);

  let ans = Array();
  for (let i in a) {
    ans.push(a[i][1][Math.floor(Math.random() * a[i][1].length)]);
  }
  return ans.join(",");
}

let arr = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  "oil",
  "lio",
];
cl(aclean(arr));

let arr2 = ["cat", "muscle", "tac", "clemus"];
cl(aclean(arr2));
