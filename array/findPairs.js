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