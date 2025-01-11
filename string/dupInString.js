function findDupInString (str){
    const result = [];
    const obj = {};
    const noSpaces = str.replace(/\s+/g, '');
    for(let i = 0; i < noSpaces.length; i++){
        if(!obj.hasOwnProperty(noSpaces[i])) obj[noSpaces[i]] = 1;
        else obj[noSpaces[i]]++;
    }
    for ( const [key , value] of Object.entries(obj)){
        if (value > 1) result.push(key);
    }
    return result;
}

function findFirstNonDup(str){
    let result = "not found";
    const obj = {};
    const noSpaces = str.replace(/\s+/g, '');
    for(let i = 0; i < noSpaces.length; i++){
        if(!obj.hasOwnProperty(noSpaces[i])) obj[noSpaces[i]] = i;
        else obj[noSpaces[i]] = true;
    }
    for ( const value of Object.values(obj)){
        if (value !== true){
            result = noSpaces[value];
            break;
        }
    }
    return result;
}
module.exports.findDupInString = findDupInString;
module.exports.findFirstNonDup = findFirstNonDup;