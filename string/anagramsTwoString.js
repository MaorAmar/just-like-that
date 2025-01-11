function ifTwoStringAreAnagrams(str1,str2){
    const newStr1 = str1.toLowerCase().replace(/\s/g, "");
    const newStr2 = str2.toLowerCase().replace(/\s/g, "");

    if(newStr1.length !== newStr2.length) return false;
    if(newStr1.length === 0 || newStr2.length === 0) return false;

    const arrCount1=new Array(26).fill(0);
    const arrCount2=new Array(26).fill(0);

    for( let i = 0;i < newStr1.length;i++){
        arrCount1[newStr1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        arrCount2[newStr2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    for( let i = 0;i < arrCount1.length;i++){
        if(arrCount1[i] !== arrCount2[i]) return false;
    }
    return true;
}

// פתרון בעזרת אובייקטים
function ifTwoStringAreAnagramsObj(str1,str2){
    const newStr1 = str1.toLowerCase().replace(/\s/g, "");
    const newStr2 = str2.toLowerCase().replace(/\s/g, "");

    if(newStr1.length !== newStr2.length) return false;
    if(newStr1.length === 0 || newStr2.length === 0) return false;

    const strObj1 = {};
    const strObj2 = {};

    for( let i = 0;i < newStr1.length;i++){
        if(strObj1.hasOwnProperty(newStr1[i])) strObj1[newStr1[i]] += 1;
        if(strObj2.hasOwnProperty(newStr2[i])) strObj2[newStr2[i]] += 1;
    }
    for (let key in strObj1) {
        if (strObj1[key] !== strObj2[key]) return false;
    }
    return true;
}



module.exports.ifTwoStringAreAnagrams = ifTwoStringAreAnagrams;
module.exports.ifTwoStringAreAnagramsObj = ifTwoStringAreAnagramsObj;