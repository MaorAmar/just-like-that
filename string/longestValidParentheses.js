function longestValidParentheses(s){
    let stack = [-1];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // שומרים את האינדקס של '('
        } else {
            stack.pop(); // מוציאים את ההתאמה
            if (stack.length === 0) {
                stack.push(i); // אם המחסנית ריקה, שומרים אינדקס חדש
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
}
module.exports.longestValidParentheses = longestValidParentheses;