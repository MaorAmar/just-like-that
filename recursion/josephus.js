function josephus(n,k){
    let currPos = 0;
    function josephusRec(n,k,currPos){
        k %= n
        if (currPos === k) return currPos + 1;
        return josephusRec(n,k,currPos+1)
    }
    const result = josephusRec(n,k,currPos);
    return result;
}

function josephus2(n,k){
    const result = new Array(n).fill(0).map((_, i) => i + 1);
    let i = 0;
    while(result.length !== 1){
        i = i + k % n - 1;
        if(i >= result.length) i %= result.length;
        result.splice(i, 1)
    }
    return result[0];
}
console.log(josephus2(21,21));
module.exports.josephus = josephus;