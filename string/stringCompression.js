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

module.exports.stringCompressionObj = stringCompressionObj;
module.exports.stringCompressionInPlace = stringCompressionInPlace