function groupAnagrams(strs) {
    const obj={};
    const result = [];
    for(const str of strs){
        const newStr = str.split('').sort().join('');
        if(!obj.hasOwnProperty(newStr)) obj[newStr] = [];
        obj[newStr].push(str)
    }
    for(const val of Object.values(obj)){
        result.push(val);
    }
    return result;
};
module.exports.groupAnagrams = groupAnagrams;
