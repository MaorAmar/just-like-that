function productExceptSelf(nums){
    let count = 1;
    const newNums = new Array(nums.length).fill(1);

    for(let i = 0 ; i < nums.length ; i++){
        newNums[i] *= count;
        count *= nums[i];
    }
    count = 1;
    for(let i = nums.length -1 ; i >= 0 ; i--){
        newNums[i] *= count;
        count *= nums[i];
    }
    return newNums;
}
module.exports.productExceptSelf = productExceptSelf;