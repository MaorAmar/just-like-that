function majorityElement(arr) {
    const obj = {};
    let result = '-1';
    for (let i = 0 ; i < arr.length; i++){
        if( !obj.hasOwnProperty(arr[i])) obj[arr[i]] = 1;
        else obj[arr[i]] += 1;
    }
    for ( const [key , value] of Object.entries(obj) ) {
        if (value > arr.length / 2) {
            result = key;
            break;
        }
    }
    return result
}

module.exports.majorityElement = majorityElement;