const {addString} = require('../addString');

describe('addString', () => {
    test('Regular case: Adding two numbers', () => {
        const num1 = "123";
        const num2 = "456";
        const result = addString(num1, num2);
        expect(result).toBe(579);
    });

    test('Case with leading zeros', () => {
        const num1 = "00123";
        const num2 = "0456";
        const result = addString(num1, num2);
        expect(result).toBe(579);
    });

    test('One number is zero', () => {
        const num1 = "0";
        const num2 = "1234";
        const result = addString(num1, num2);
        expect(result).toBe(1234);
    });

    test('Both numbers are zero', () => {
        const num1 = "0";
        const num2 = "0";
        const result = addString(num1, num2);
        expect(result).toBe(0);
    });

    test('Different lengths', () => {
        const num1 = "98765";
        const num2 = "123";
        const result = addString(num1, num2);
        expect(result).toBe(98888);
    });

    test('Large numbers', () => {
        const num1 = "987654321";
        const num2 = "1234567";
        const result = addString(num1, num2);
        expect(result).toBe(988888888);
    });
});