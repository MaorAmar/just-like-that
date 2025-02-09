const {missingAndRepeating } = require('../missingAndRepeating.js');

describe('missingAndRepeating', () => {
    test('missingAndRepeating - regular case', () => {
        const arr = [4, 3, 6, 2, 1, 1];
        expect(missingAndRepeating(arr)).toEqual([1 , 5]); // 5 חסר, 1 חוזר
    });

    test('missingAndRepeating - missing last number', () => {
        const arr = [1, 2, 3, 4, 4];
        expect(missingAndRepeating(arr)).toEqual([4,5]); // 5 חסר, 4 חוזר
    });

    test('missingAndRepeating - test 1', () => {
        const arr = [2, 2, 3, 4, 5];
        expect(missingAndRepeating(arr)).toEqual([2,1]);
    });

    test('missingAndRepeating - test2', () => {
        const arr = [1,1,2,3];
        expect(missingAndRepeating(arr)).toEqual([1,4]);
    });

    test('missingAndRepeating - two numbers only', () => {
        const arr = [2, 2];
        expect(missingAndRepeating(arr)).toEqual([2,1]); // 1 חסר, 2 חוזר
    });

    test('missingAndRepeating - all elements repeating', () => {
        const arr = [3, 1, 4, 2, 6, 6];
        expect(missingAndRepeating(arr)).toEqual([6,5]); // 5 חסר, 6 חוזר
    });

    test('missingAndRepeating - large case', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10];
        expect(missingAndRepeating(arr)).toEqual([10,9]); // 9 חסר, 10 חוזר
    });

    test('missingAndRepeating - unordered array', () => {
        const arr = [9, 6, 4, 8, 5, 2, 1, 7, 6];
        expect(missingAndRepeating(arr)).toEqual([6,3]); // 3 חסר, 6 חוזר
    });
});
