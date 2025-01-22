function subarrayWithGivenSum(arr,S){
    let sum = 0;
    let j = 0;
    for(let i = 0;i < arr.length;i++){
        if ( sum + arr[i] < S){
            sum += arr[i];
        }
        else if ( sum + arr[i] > S) {
            sum -= arr[j];
            j++;
            i--;
            if(j > i) break;
        }
        else return [j+1,i+1]
    }
    return -1;
}
module.exports.subarrayWithGivenSum = subarrayWithGivenSum;
