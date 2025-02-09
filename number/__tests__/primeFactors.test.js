const { primeFactor } = require('../primeFactors');

describe('primeFactor function', () => {
    test('input 12', () => {
        expect(primeFactor(12)).toEqual([2, 2, 3]);
    });

    test('input 7 (prime number)', () => {
        expect(primeFactor(7)).toEqual([7]);
    });

    test('input 1 (no prime factors)', () => {
        expect(primeFactor(1)).toEqual([]);
    });

    test('input 90', () => {
        expect(primeFactor(90)).toEqual([2, 3, 3, 5]);
    });

    test('input 13 (prime number)', () => {
        expect(primeFactor(13)).toEqual([13]);
    });

    test('input 0 (no prime factors)', () => {
        expect(primeFactor(0)).toEqual([]);
    });

    test('large prime number', () => {
        expect(primeFactor(982451653)).toEqual([982451653]);
    });
});