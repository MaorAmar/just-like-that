function longestCommonPrefix(strs) {
    if(strs.length === 1) return strs[0];
    let firstStr = strs[0];
    let result = undefined;
    for(let i = 1 ; i < strs.length;i++){
        let currStr = strs[i]
        let currResult = '';
        for(let j = 0 ; j < strs[i].length ; j++){
            if(firstStr[j] === currStr[j])
                currResult += firstStr[j];
            else break;
        }

        if(result === undefined)
            result = currResult;
        else result = result.length < currResult.length ? result : currResult;
    }
    if(result === undefined) result = '';
    return result;
};
module.exports.longestCommonPrefix = longestCommonPrefix;