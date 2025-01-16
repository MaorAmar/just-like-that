function missingAndRepeating(arr) {
    const obj = {};
    let sum = 0;
    let n = arr.length
    let b = -1;
    for (const num of arr){
        if(obj.hasOwnProperty(num)){
           b = num;
        }
        else {
            obj[num] = true;
            sum += num
        }
    }
    const a = n*(n+1)/2 - sum;
    return [b , a]
}
module.exports.missingAndRepeating = missingAndRepeating;
