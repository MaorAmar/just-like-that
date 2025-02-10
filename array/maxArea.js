function maxArea(height) {
    let result = 0;
    let i = 0, j = height.length - 1;
    while(i < j){
        const currRes = (j - i) * Math.min(height[i],height[j]);
        result = Math.max(result, currRes);
        if(height[i]<height[j]) i++;
        else j--;
    }
    return result;
};

module.exports.maxArea = maxArea;