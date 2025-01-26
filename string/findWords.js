function findWordsJsSyntax(words) {
    let firstRow = 'qwertyuiop';
    let secondRow = 'asdfghjkl';
    let thirdRow = 'zxcvbnm';
    let result = [];
    for(const str of words){
        const word = str.toLowerCase();
        if( word.split('').every(char => firstRow.includes(char)) ||
            word.split('').every(char => secondRow.includes(char)) ||
            word.split('').every(char => thirdRow.includes(char)) )
            result.push(str);
    }
    return result;
};

function findWordsObj(words) {
    const keyBoard = {
        q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1,
        a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2,
        z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3
    };
    let result = [];
    for(const str of words){
        let lowWord = str.toLowerCase();
        let group = keyBoard[lowWord[0]];
        let flag = true;
        for(let i = 1; i < lowWord.length; i++){
            if(keyBoard[lowWord[i]] !== group) {
                flag = false;
                break;
            }
            else continue;
        }
        if(flag) result.push(str);
    }
    return result;
}

function findWordsIf(words) {
    let firstRow = 'qwertyuiop';
    let secondRow = 'asdfghjkl';
    let thirdRow = 'zxcvbnm';
    let result = [];
    let flag = false;
    for(const str of words){
        const newStr = str.toLowerCase();
        if(firstRow.includes(newStr[0])){
            for(let i = 1 ; i < newStr.length ; i++){
                if(firstRow.includes(newStr[i])) flag = true;
                else {
                    flag = false;
                    break;
                }
            }
            if (flag === true) result.push(str)
        }
        if(secondRow.includes(newStr[0])){
            for(let i = 1 ; i < newStr.length ; i++){
                if(secondRow.includes(newStr[i])) flag = true;
                else {
                    flag = false;
                    break;
                }
            }
            if (flag === true) result.push(str)
        }
        if(thirdRow.includes(newStr[0])){
            for(let i = 1 ; i < newStr.length ; i++){
                if(thirdRow.includes(newStr[i])) flag = true;
                else {
                    flag = false;
                    break;
                }
            }
            if (flag === true) result.push(str)
        }
    }
    return result;
};

module.exports.findWordsObj = findWordsObj;
module.exports.findWordsJsSyntax = findWordsJsSyntax;
module.exports.findWordsIf = findWordsIf;

console.log(findWordsIf(["Hello","Alaska","Dad","Peace"]));