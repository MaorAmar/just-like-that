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
module.exports.josephus = josephus;