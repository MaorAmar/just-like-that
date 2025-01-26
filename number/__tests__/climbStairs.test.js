const {climbStairs} = require('../climbStairs.js');
describe('climbStairs', () => {
    test.each([
        { n: 1, expected: 1 },
        { n: 2, expected: 2 },
        { n: 3, expected: 3 },
        { n: 4, expected: 5 },
        { n: 5, expected: 8 },
        { n: 6, expected: 13 },
        { n: 7, expected: 21 },
        { n: 8, expected: 34 },
        { n: 9, expected: 55 },
        { n: 10, expected: 89 }
    ])('climbStairs n = $n', ({ n, expected }) => {
        expect(climbStairs(n)).toBe(expected);
    });
});