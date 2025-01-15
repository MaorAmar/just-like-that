function findAllPairs(arr,k){
    const obj = {};
    result = [];
    for (const num of arr){
        if(obj.hasOwnProperty(num)) result.push([num, obj[num]]) ;
        else obj[k-num] = num;
    }
    return result;
}

module.exports.findAllPairs = findAllPairs;

function findParirsEqualToZero(arr){
    const sortedArr = arr.slice(0).sort((a,b) => a-b);
    let j = sortedArr.length - 1;
    let i = 0;
    let sum = sortedArr[0] + sortedArr[sortedArr.length-1];
    let result = [sortedArr[0],sortedArr[sortedArr.length-1]]
    result = [];
    while (i < j){
        if ( Math.abs(sortedArr[i] + sortedArr[j]) <= Math.abs(sum) ) {
            sum = sortedArr[i] + sortedArr[j];
            result.length = 0;
            result.push(sortedArr[i], sortedArr[j]);
        }
        if(Math.abs(sortedArr[i]) <= Math.abs(sortedArr[j])) j-=1;
        else i+=1;
    }
    return result;
}
module.exports.findParirsEqualToZero = findParirsEqualToZero;