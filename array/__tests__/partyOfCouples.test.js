const { findSingle, findSingleWithXor } = require('../partyOfCouples.js');

describe('findSingle Functions', () => {
    test('Regular case', () => {
        const arr = [1, 2, 3, 2, 1];
        const expected = 3;

        expect(findSingle(arr)).toBe(expected);
        expect(findSingleWithXor(arr)).toBe(expected);
    });

    test('Single element at the end', () => {
        const arr = [4, 4, 5];
        const expected = 5;

        expect(findSingle(arr)).toBe(expected);
        expect(findSingleWithXor(arr)).toBe(expected);
    });

    test('with more then 1 ', () => {
        const arr = [7,7,1,2,1,2,7];
        const expected = 7;

        expect(findSingle(arr)).toBe(expected);
        expect(findSingleWithXor(arr)).toBe(expected);
    });

    test('Larger array', () => {
        const arr = [6, 1, 9, 6, 1];
        const expected = 9;

        expect(findSingle(arr)).toBe(expected);
        expect(findSingleWithXor(arr)).toBe(expected);
    });

    test('Single element at the start', () => {
        const arr = [10, 20, 20];
        const expected = 10;

        expect(findSingle(arr)).toBe(expected);
        expect(findSingleWithXor(arr)).toBe(expected);
    });
});