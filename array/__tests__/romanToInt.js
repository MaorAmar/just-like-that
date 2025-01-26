const {romanToInt} = require('../romanToInt');

describe('romanToInt', () => {
    test('Converts MCMXCIV to 1994', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });

    test('Converts III to 3', () => {
        expect(romanToInt('III')).toBe(3);
    });

    test('Converts IV to 4', () => {
        expect(romanToInt('IV')).toBe(4);
    });

    test('Converts IX to 9', () => {
        expect(romanToInt('IX')).toBe(9);
    });

    test('Converts LVIII to 58', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });

    test('Converts XLII to 42', () => {
        expect(romanToInt('XLII')).toBe(42);
    });

    test('Converts MMXXV to 2025', () => {
        expect(romanToInt('MMXXV')).toBe(2025);
    });

    test('Handles single Roman numeral I', () => {
        expect(romanToInt('I')).toBe(1);
    });
});