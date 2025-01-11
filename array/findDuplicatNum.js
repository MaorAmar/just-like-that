function findDuplicatNumberInArray(arr){
    const newObj = {};
    let dupIndex = []

    for(let i = 0 ; i < arr.length ; i++){
        if(!newObj.hasOwnProperty(arr[i])) newObj[arr[i]] = [];
        newObj[arr[i]].push(i)
    }
    for(const indexes of Object.values(newObj)){
        indexes.pop();
        dupIndex = [...dupIndex, ...indexes];
    }
    return dupIndex;
}


function removeDupNumberInArray(arr){
    const arrAfterRemoveDup = [...arr];
    const dupIndex = findDuplicatNumberInArray(arr);
    for(let i = dupIndex.length - 1; i >= 0 ; i--){
        arrAfterRemoveDup.splice(dupIndex[i], 1);
    }
    return arrAfterRemoveDup;
}


function removeDupNumberInArrayInPlace(arr){
    const dupIndex = findDuplicatNumberInArray(arr);
    for(let i = dupIndex.length - 1; i >= 0 ; i--){
        arr.splice(dupIndex[i], 1);
    }
    return arr;
}

module.exports.removeDupNumberInArrayInPlace = removeDupNumberInArrayInPlace;
module.exports.removeDupNumberInArray = removeDupNumberInArray;
module.exports.findDuplicatNumberInArray = findDuplicatNumberInArray;