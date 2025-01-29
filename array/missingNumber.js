function missingNumber(arr){
    const obj = {};
    for(const num of arr){
        if(!obj.hasOwnProperty(num) && num >= 1) obj[num] = true;
    }
    for(let i = 1;i <= arr.length + 1; i++){
        if(!obj.hasOwnProperty(i)) return i;
    }
    return 1;
}
function missingNumberBeter(arr){
    arr = arr.filter(num => num > 0);
    arr = arr.filter(num => num <= arr.length);
    console.log(arr);
    for(const i in arr){
        if(arr[i] >= arr.length + 1) arr[i] = -1;

    }
    return 1;
}
console.log(missingNumberBeter([1,2,3,4,5,6,7,8]));