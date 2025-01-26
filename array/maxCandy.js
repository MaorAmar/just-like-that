function kidsWithCandies(candies, extraCandies) {
    let resultArr = [];
    const maxNum = Math.max(...candies)
    let i = 0;
    for(const num of candies){

        if(num + extraCandies >= maxNum) resultArr.push(true);
        else resultArr.push(false);
    }
    return resultArr;
};

module.exports.kidsWithCandies = kidsWithCandies;