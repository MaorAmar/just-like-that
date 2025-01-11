const { missingNumWithSort, missingNumArrayCounting } = require('../MissingNum');

describe('Missing Number Tests', () => {
    test('Missing number in the middle', () => {
        const list = [1, 2, 4, 5, 6];
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(3);
        expect(result2).toBe(3);
    });

    test('Missing number at the start', () => {
        const list = [2, 3, 4, 5];
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(1);
        expect(result2).toBe(1);
    });

    test('Missing number at the end', () => {
        const list = [1, 2, 3, 4];
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(5);
        expect(result2).toBe(5);
    });

    test('Empty array', () => {
        const list = [];
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(1); // The first missing number is 1
        expect(result2).toBe(1);
    });

    test('Single element array', () => {
        const list = [2];
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(1);
        expect(result2).toBe(1);
    });

    test('Array with no missing numbers', () => {
        const list = [1, 2, 3, 4, 5];
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(6); // The next number after the last
        expect(result2).toBe(6);
    });

    test('Unsorted array', () => {
        const list = [4, 1, 3, 2, 6, 8, 7];
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(5);
        expect(result2).toBe(5);
    });


    test('Large array with missing number', () => {
        const list = Array.from({ length: 10 ** 6 }, (_, i) => i + 1).filter(num => num !== 500_000);
        const result1 = missingNumArrayCounting(list);
        const result2 = missingNumWithSort(list);
        expect(result1).toBe(500_000);
        expect(result2).toBe(500_000);
    });

});


