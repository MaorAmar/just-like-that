function findPermutations(str) {
    const output = [];
    const chars = str.split('');
    function findPermutationsRec(chars , result = ''){
        if(chars.length === 0){
            output.push(result);
            return;
        }
        for(let i = 0; i < chars.length ; i++){
            const cloneChars = chars.slice(0);
            const [c] = cloneChars.splice(i, 1);
            findPermutationsRec(cloneChars, result + c);
        }
    }
    findPermutationsRec(chars);
    return output.sort();
}

module.exports.findPermutations = findPermutations;