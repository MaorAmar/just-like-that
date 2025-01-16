function powOfTwo(n){
    const binaryNumber = n.toString(2);
    const obj = {};
    let result = true;
    if (n === 0) result = false;

    for (const c of binaryNumber) {
        if(!obj.hasOwnProperty(c)) obj[c] = 1;
        else {
            if( c === '1' ) {
                result = false;
                break;
            }
            obj[c] += 1;
        }
    }
    return result;
}

module.exports.powOfTwo = powOfTwo;