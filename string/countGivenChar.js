function countGivenChar(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    if (result.hasOwnProperty(str[i])) result[str[i]]++;
    else result[str[i]] = 1;
  }
  return result;
}
const str = "Just Like That";
console.log(JSON.stringify(countGivenChar(str)));
