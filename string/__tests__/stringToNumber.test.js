const { stringToNumber } = require('../stringToNumber'); // שנה את שם הקובץ בהתאם

describe('stringToNumber tests', () => {
    test.each([
        ['42', 42],
        ['-42', -42],
        ['  -42', -42],
        ['4193 with words', 4193],
        ['words 123', 0],
        ['+123', 123],
        ['+000123', 123],
        ['0', 0],
        ['  +0  ', 0],
    ])('str: "%s", expected: %s',
        (str, expected) => {
            expect(stringToNumber(str)).toBe(expected);
        }
    );
});