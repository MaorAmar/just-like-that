function climbStairs(n){
    if (n <= 3 ) return n;
    let last = 3;
    let befor = 2;
    let result = 0;
    for(let i = 3;i < n;i++){
        result = last + befor;
        befor = last;
        last = result;
    }
    return result
}

module.exports.climbStairs = climbStairs;