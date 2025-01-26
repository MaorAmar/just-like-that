const { removeVal } = require('../removeVal'); // החלף בשם הקובץ שלך

describe('removeVal', () => {
    test('Regular case: Remove a single value', () => {
        const nums = [3, 2, 2, 5];
        const val = 3;
        const result = removeVal(nums, val);
        expect(result).toBe(3);
    });

    test('Case with multiple occurrences', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        const result = removeVal(nums, val);
        expect(result).toBe(5);
    });

    test('val not found', () => {
        const nums = [1, 3, 5, 7];
        const val = 2;
        const result = removeVal(nums, val);
        expect(result).toBe(4);
    });

    test('all the same', () => {
        const nums = [2, 2, 2, 2];
        const val = 2;
        const result = removeVal(nums, val);
        expect(result).toBe(0);
    });

    test('Empty array', () => {
        const nums = [];
        const val = 3;
        const result = removeVal(nums, val);
        expect(result).toBe(0); // Nothing to remove
    });


});