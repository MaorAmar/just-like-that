function searchRange(nums,target){
    let low = 0;
    let result = []
    let high = nums.length - 1;
    while(low <= high){
        const mid = Math.floor((low + high) / 2);
        if(nums[low] === target && nums[high] === target){
            result.push(low,high);
            return result;
        }
        if(nums[mid] < target) low = mid + 1;
        else if(nums[mid] > target) high = mid - 1;
        else {
            if(nums[low] !== target) low++;
            if(nums[high] !== target) high--;
        };
    }
    return [-1,-1];
}

module.exports.searchRange = searchRange;