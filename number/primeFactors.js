function primeFactor(num){
    let currDivision = 2;
    let result = [];
    while(num > 1){
        if ((num / currDivision) % 1 !== 0) {
            currDivision++;
            continue;
        }
        num = num / currDivision;
        result.push(currDivision);
    }
    return result;
}

module.exports.primeFactor = primeFactor;

