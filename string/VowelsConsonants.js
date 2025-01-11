function countVowelsAndConsonants(str) {
  const result={vowels:0,Consonants:0,somethingElse:0};
  const VOWELS = 'aeiuo';
  const abcRegex = /[a-z]/
  newStr=str.toLowerCase();
  for(let i=0 ; i < newStr.length ; i++){
    if(VOWELS.includes(newStr[i])) result.vowels++;
    else if(abcRegex.test(newStr[i])) result.Consonants++;
    else result.somethingElse++;
  }
  return result;
}
const str = "Just Like That";
console.log(countVowelsAndConsonants(str));
