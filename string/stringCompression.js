function stringCompression(chars) {
    const obj = {};
    let result = [];
    for (const char of chars){
        if(!obj.hasOwnProperty(char)) obj[char] = 1;
        else obj[char]++;
    }
    for(const [key, val] of Object.entries(obj)){
        if(val === 1) result.push(key.toString());
        else if(val < 10) result.push(key.toString(),val.toString());
        else{
            result.push(key.toString());
            const newVal = val.toString().split("");
            result.push(...newVal);
        }
    }
    return result;
}

function stringCompressionInPlace(chars) {
    let counter = 0;

    for(let i = chars.length - 1;i >= 0;i--) {
        if (chars[i] === chars[i - 1]) counter++
        else {
            if (counter > 0) {
                counter++;
                if (counter >= 10) {
                    const counterArr = counter.toString().split("");
                    chars.splice(i + 1, counter - 1, ...counterArr);
                } else {
                    chars.splice(i + 1, counter - 1, counter.toString());
                }
                counter = 0;
            } else continue;
        }
    }
    return chars;
}
module.exports.stringCompression = stringCompression;
module.exports.stringCompressionInPlace = stringCompressionInPlace