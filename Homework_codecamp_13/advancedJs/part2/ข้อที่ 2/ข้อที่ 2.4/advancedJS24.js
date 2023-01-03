function extractCurrencyValue(str, rate) {
  let dollar = +str.slice(1);
  return dollar * rate;
}

console.log(extractCurrencyValue("$120", 30.5));
console.log(extractCurrencyValue("$120", 30.5) === 3660);
