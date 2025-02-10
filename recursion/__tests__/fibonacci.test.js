const {fibonacciMemoized} = require('../fibonacci')

describe('fibonacciMemoized tests', () => {
    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [6, 13],
        [10, 89],
        [15, 987],
    ])('num: %s, expected Fibonacci: %s',
        (num, expected) => {
            expect(fibonacciMemoized(num)).toBe(expected);
        }
    );
});