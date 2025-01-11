const {correctParenthesesCounter , correctParenthesesStack} = require('../correctParentheses');

describe('correctParenthesesCounter test true', () => {
    test.each([
        ['((()))'],
        ['()'],
        ['()()()()()'],
        ['(()())()'],
        [''],
    ])('return true',(str) => {
        expect(correctParenthesesCounter(str)).toBeTruthy();
        expect(correctParenthesesStack(str)).toBeTruthy();


    });

    test.each([
        ['((())'],
        ['('],
        ['()()()('],
        ['(()(()(('],
        [')('],
    ])('return false',(str) => {
        expect(correctParenthesesCounter(str)).toBeFalsy();
        expect(correctParenthesesStack(str)).toBeFalsy();

    })
})