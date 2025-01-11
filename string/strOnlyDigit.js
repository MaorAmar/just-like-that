/*
function strOnlyContainsDigits(str){
  const numerRegex = /[0-9]/;
  for(let i = 0;i < str.length; i++){
    if(!numerRegex.test(str[i])) return false;
    else continue;
  }
  return true;
}
*/
function strOnlyContainsDigits(str){
  const checkStr ='0123456789';
  let i = 0;
  while(i < str.length){
    if(!checkStr.includes(str[i])) return false;
    else i++;
  }
  return true;
}

const str = "aaaaaa";
console.log(strOnlyContainsDigits(str));
