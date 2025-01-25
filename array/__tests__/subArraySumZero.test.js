const {subArraySumZero} = require("../subArraySum0");
describe('subArrayWithGivenSum', () => {
    test('Regular case', () => {
        const arr = [4, 2, -3, 1, 6];
        result = subArraySumZero(arr);
        expect(result).toBeTruthy();
    })

    test("Array that itself sums to zero", () => {
        const arr = [3, -1, -2];
        const result = subArraySumZero(arr);
        expect(result).toBeTruthy();
    });

    test("Case with a single zero in the array", () => {
        const arr = [1, 2, 3, 0, 4];
        const result = subArraySumZero(arr);
        expect(result).toBeTruthy();
    });

    test("Case with multiple zeros in the array", () => {
        const arr = [0, 0, 0];
        const result = subArraySumZero(arr);
        expect(result).toBeTruthy();
    });

    test("Empty array", () => {
        const arr = [];
        const result = subArraySumZero(arr);
        expect(result).toBeFalsy();
    });

    test("Array with all positive numbers", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = subArraySumZero(arr);
        expect(result).toBeFalsy(); // אין תת-מערך שסכומו 0
    });

    test("Array with both positive and negative numbers", () => {
        const arr = [1, 2, -3, 4, -4];
        const result = subArraySumZero(arr);
        expect(result).toBeTruthy();
    });

    test("Array where the sum becomes zero in the middle", () => {
        const arr = [1, 2, -3, 3, -3];
        const result = subArraySumZero(arr);
        expect(result).toBeTruthy();
    });
})