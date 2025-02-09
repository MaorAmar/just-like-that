function stringToNumber(str){
    let result = 0;
    let flag = 1;
    let i = 0;
    str = str.trim();
    if(str[i] === '-'){
        flag = -1;
        i++;
    }else if(str[i] === '+'){
        i++;
    }

    for(;i < str.length; i++){
        const currNum = str[i].charCodeAt(0) - '0'.charCodeAt(0);
        if(currNum < 0 || currNum > 9) break;
        result = result * 10 + currNum;
    }
    return result * flag;
}
console.log(stringToNumber('-0'));
module.exports.stringToNumber = stringToNumber;