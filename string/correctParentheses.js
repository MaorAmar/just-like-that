function correctParenthesesCounter(str){
    let counter = 0;
    for(let i=0; i < str.length; i++){
        if (str[i] === '(')
            counter++;
        else if(str[i] === ')')
            counter--;
        else return false;

        if(counter < 0) return false;
    }
    return counter === 0;
}

function correctParenthesesStack(str) {
    const stack = [];
    for (const c of str) {
        if (c === '(') stack.push(c);
        else if (c === ')') {
            const checkIfUn = stack.pop();
            if (checkIfUn === undefined) return false;
        } else return false;
    }
    return stack.length === 0;
}
module.exports.correctParenthesesStack = correctParenthesesStack;
module.exports.correctParenthesesCounter = correctParenthesesCounter;