function removeVal(nums, val) {
    let k = 0;
    for(let i = nums.length - 1;i >= 0;i--){
        if(nums[i] === val){
            nums.splice(i ,1);
            continue;
        }
        k++;
    }
    return k;
}

module.exports.removeVal = removeVal;

