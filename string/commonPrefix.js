function commonPrefix(arr){
    if(arr.length === 0) return "";
    const sortestString = arr.reduce((currNum , theSort) =>
    currNum.length < theSort.length ? currNum : theSort);
    let result = "";

    for(let i = 0 ; i < sortestString.length ; i++){
        let temp = arr[0][i];
        for(const str of arr){
            if(str[i] !== temp)
                return result;
        }
        result += temp;
    }
    return result;
}

module.exports.commonPrefix = commonPrefix;