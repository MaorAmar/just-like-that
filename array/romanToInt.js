function romanToInt(s) {
    const romanLibery = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let sum = 0;
    for(let i = s.length-1; i >= 0; i--){
        if(i===0) {
            sum += romanLibery[s[i]];
            break;
        }
        let lastNum = romanLibery[s[i-1]]
        let currNum = romanLibery[s[i]];
        if(lastNum < currNum){
            sum += currNum -  lastNum;
            i--;
            continue;
        }
        sum +=currNum;

    }
    return sum;
};
module.exports.romanToInt = romanToInt;