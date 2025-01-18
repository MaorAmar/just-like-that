function lengthOfLastWord(str){
    str = str.trim().replace(/\s+/g, ' ')
    let result = 0;
    for (let i = str.length -1; i >= 0;i--){
        if( str[i] === ' ') break;
        result++;

    }
    return result;
}
console.log(lengthOfLastWord("  luffy is still joyboy "));;