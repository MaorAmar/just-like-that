function palindromeRec(str){
    if (!str.length) return true;
    const start = str[0];
    const end = str[str.length - 1];
    if(start !== end) {
        return false;
    }
    return palindromeRec(str.slice(1,-1));

}
console.log(palindromeRec('dsad'));
module.exports.palindromeRec = palindromeRec;