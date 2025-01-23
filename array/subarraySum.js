function subarrayWithGivenSum(arr,S){
    let sum = 0,i = 0, j = 0;
    while(i < arr.length) {
        if ( sum + arr[i] < S){
            sum += arr[i++];
        }
        else if ( sum + arr[i] > S) {
            sum -= arr[j];
            j++;
            if(j > i) {
                sum += arr[i];
                i = j;
            }
        }
        else return [j+1,i+1]
    }
    return -1;
}
module.exports.subarrayWithGivenSum = subarrayWithGivenSum;
