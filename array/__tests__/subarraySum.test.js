const {subarrayWithGivenSum} = require('../subarraySum');

describe('subArrayWithGivenSum', () => {
    test('Regular case', () => {
        const arr = [1, 2, 3, 4, 5];
        const S = 15;
        result = subarrayWithGivenSum(arr, S);
        expect(result).toEqual([1,5]);
    })
    test('Empty array', () => {
        const arr = [];
        const S = 10;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toBe(-1);
    });

    test('Single element matches the sum', () => {
        const arr = [10];
        const S = 10;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toEqual([1, 1]);
    });

    test('Single element does not match the sum', () => {
        const arr = [5];
        const S = 10;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toBe(-1);
    });

    test('chatGPT wrong', () => {
        const arr = [1, 2, 3, 8, 5];
        const S = 11;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toEqual([3, 4]);
    });

    test('No subarray matches the sum', () => {
        const arr = [1, 2, 3, 4, 5];
        const S = 20;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toBe(-1);
    });

    test('Multiple subarrays possible', () => {
        const arr = [1, 2, 3, 4, 5];
        const S = 9;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toEqual([2, 4]);
    });


    test('Large array', () => {
        const arr = Array(1000).fill(1);
        const S = 10;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toEqual([1, 10]);
    });

    test('All elements are the same', () => {
        const arr = [2, 2, 2, 2, 2];
        const S = 6;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toEqual([1, 3]);
    });

    test('Subarray starts and ends in the middle', () => {
        const arr = [1, 2, 3, 7, 5];
        const S = 12;
        const result = subarrayWithGivenSum(arr, S);
        expect(result).toEqual([2, 4]);
    });

})