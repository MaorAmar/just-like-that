const {numberOfPathsRec} = require('../numberOfPathsRec');
const {numberOfPaths} = require('../../number/numberOfPaths.js');
describe('numberOfPaths', () => {
    test.each([
        [3, 3, 6],
        [2, 2, 2],
        [3, 7, 28],
        [1, 1, 1],
        [5, 5, 70],
    ])('given m=%i and n=%i, returns %i paths', (m, n, expected) => {
        expect(numberOfPathsRec(m, n)).toBe(expected);
        expect(numberOfPaths(m, n)).toBe(expected);
    });
});