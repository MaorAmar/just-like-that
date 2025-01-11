function paresStrToNumber(str) {
  let num = 1;
  let result = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i] * num;
    num *= 10;
  }
  return result;
}
const str = "123";
let result = paresStrToNumber(str);
console.log(result, typeof result);
