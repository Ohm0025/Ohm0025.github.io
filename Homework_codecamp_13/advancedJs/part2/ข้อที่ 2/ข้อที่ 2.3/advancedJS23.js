function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength) + "..." : str;
}

console.log(truncate("Hi everyone!", 20))
console.log(truncate("What I'd like to tell on this topic is:", 20))