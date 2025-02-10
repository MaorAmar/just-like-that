const {longestCommonPrefix} = require('../longestCommonPrefix');

describe('longestCommonPrefix', () => {
    test.each([
        [['cir', 'car'], 'c'],
        [['dog', 'racecar', 'car'], ''],
        [['flower', 'flow', 'flight'], 'fl'],
        [['dog', 'dogma', 'dog'], 'dog'],
        [['a'], 'a'],
        [[], ''],
    ])('given %p as input, returns %p', (input, expected) => {
        expect(longestCommonPrefix(input)).toBe(expected);
    });
});