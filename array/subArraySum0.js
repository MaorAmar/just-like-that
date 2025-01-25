

function subArraySumZero(arr){
    const objSum = {};
    let sum = 0;
    for (const num of arr){
        sum += num;
        if(sum === 0 || objSum.hasOwnProperty(sum)) return true;
        if(!objSum.hasOwnProperty(sum)) objSum[sum] = 1;
    }
    return false;
}

module.exports.subArraySumZero = subArraySumZero;



/* פתרון של הדריאל לא תקין
function subArraySumZero(arr){
    let sum = arr.reduce((sum,currNum) => sum + currNum, 0 );
    const subArr = [...arr];
    while(subArr.length && sum !== 0){
        const leftNum = subArr[0];
        const rightNum = subArr[subArr.length - 1];
        const sumWithoutStart = Math.abs(sum - leftNum)
        const sumWithoutLast = Math.abs(sum - rightNum)
        if(sumWithoutStart < sumWithoutLast){
            sum -= leftNum;
            subArr.splice(0, 1)
        }else{
            sum -= rightNum;
            subArr.splice(subArr.length - 1, 1)

        }
    }
    return sum === 0 && subArr.length > 0;
}*/