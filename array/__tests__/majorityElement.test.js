const { majorityElement } = require('../majorityElement.js');

describe('majorityElement Tests', () => {
    test('majorityElement test 1 - no majority', () => {
        const list = [1, 2, 4, 5, 6];
        const result1 = majorityElement(list);
        expect(result1).toBe('-1'); // Assuming the function returns null if no majority exists
    });

    test('majorityElement test 2 - majority exists', () => {
        const list = [3, 3, 4, 3, 5, 3];
        const result2 = majorityElement(list);
        expect(result2).toBe('3');
    });

    test('majorityElement test 3 - single element', () => {
        const list = [7];
        const result3 = majorityElement(list);
        expect(result3).toBe('7');
    });

    test('majorityElement test 4 - empty array', () => {
        const list = [];
        const result4 = majorityElement(list);
        expect(result4).toBe('-1'); // Assuming the function returns null for an empty array
    });

    test('majorityElement test 5 - all elements the same', () => {
        const list = [9, 9, 9, 9, 9];
        const result5 = majorityElement(list);
        expect(result5).toBe('9');
    });

    test('majorityElement test 6 - tie case', () => {
        const list = [1, 2, 1, 2, 3];
        const result6 = majorityElement(list);
        expect(result6).toBe('-1'); // Assuming null is returned when no majority is present
    });
});


