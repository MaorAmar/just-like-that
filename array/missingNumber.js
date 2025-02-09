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

console.log(missingNumber([1,2,3,4,5,6,7,8]));