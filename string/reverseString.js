
function reverseString(str){
    let temp = 0;
    const newArr = str.split(" ").filter(Boolean);
    let j = newArr.length - 1;
    for(let i = 0 ; i < j;i++,j-- ){
        temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }
    const result = newArr.join(" ");
    return result
}

module.exports.reverseString = reverseString;