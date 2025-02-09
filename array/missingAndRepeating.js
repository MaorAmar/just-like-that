function missingAndRepeating(arr) {
    const obj = {};
    let a = -1;
    let b = -1;
    let sum = 0;
    let n = arr.length
    for (let i = 0 ;i < n ; i++){
        if(obj.hasOwnProperty(arr[i])){
           b = arr[i];
        }
        else {
            obj[arr[i]] = true;
            sum += arr[i]
        }
    }
    a = n*(n+1)/2 - sum;
    return [b , a]
}
module.exports.missingAndRepeating = missingAndRepeating;
