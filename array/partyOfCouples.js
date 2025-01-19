function findSingle(arr){
    const obj = {};
    for(const n of arr){
        if(obj.hasOwnProperty(n)) obj[n] += 1;
        else obj[n] = 1;
    }
    for(const [key,val] of Object.entries(obj)){
        if(val % 2 === 1) return Number(key);
    }
}
function findSingleWithXor(arr){
    let result = 0;
    for( const n of arr){
        result ^= n;
    }
    return result;

}
module.exports.findSingle = findSingle;
module.exports.findSingleWithXor = findSingleWithXor;