const {longestValidParentheses} = require('../longestValidParentheses');

describe('longestValidParentheses', () => {
    test('longestValidParentheses "()" ',()=>{
        const s = "(()";
        const result = 2;
        expect(longestValidParentheses(s)).toBe(result);
    })
    test('longestValidParentheses ")()())" ',()=>{
        const s = ")()())";
        const result = 4;
        expect(longestValidParentheses(s)).toBe(result);
    })
    test('longestValidParentheses empty ',()=>{
        const s = "";
        const result = 0;
        expect(longestValidParentheses(s)).toBe(result);
    })
    test('longestValidParentheses "()(()"',()=>{
        const s = "()(()";
        const result = 2;
        expect(longestValidParentheses(s)).toBe(result);
    })
    test('longestValidParentheses "(()()"',()=>{
        const s = "(()()";
        const result = 4;
        expect(longestValidParentheses(s)).toBe(result);
    })

})