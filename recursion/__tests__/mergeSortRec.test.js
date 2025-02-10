const {mergeSort} = require('../mergeSortRec');

describe('mergeSort tests', () => {
    test.each([
        [[2, 9, 5, 1, 7, 3], [1, 2, 3, 5, 7, 9]],
        [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
        [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5]],
        [[10], [10]],
        [[], []],
        [[3, 3, 3, 3], [3, 3, 3, 3]],
        [[-5, -1, -3, -2, -4], [-5, -4, -3, -2, -1]]
    ])('arr: %s, expected sorted: %s',
        (arr, expected) => {
            expect(mergeSort(arr)).toEqual(expected);
        }
    );
});