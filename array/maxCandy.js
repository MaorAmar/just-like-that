/*var kidsWithCandies = function(candies, extraCandies) {
    let resultArr = [];
    const maxNum = Math.max(...candies)
    let i = 0;
    for(const num of candies){

        if(num + extraCandies >= maxNum) resultArr.push(true);
        else resultArr.push(false);
    }
    return resultArr;
};*/

var romanToInt = function(s) {
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
console.log(romanToInt('MCMXCIV'));