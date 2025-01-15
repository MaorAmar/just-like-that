const {toggleBitsGivenRang} = require('../toggleBits.js');

describe('toggleBits', () => {
    test('toggleBits first', () => {
        const n = 17;
        const l = 2;
        const r = 3;
        expect(toggleBitsGivenRang(n , l , r)).toEqual(23);
    })
    test('toggleBits first', () => {
        const n = 25;
        const l = 2;
        const r = 4;
        expect(toggleBitsGivenRang(n , l , r)).toEqual(30);
    })
    test('toggleBits toggling a single bit', () => {
        const n = 8; // Binary: 1000
        const l = 0;
        const r = 0;
        expect(toggleBitsGivenRang(n, l, r)).toEqual(0); // Binary: 0000
    });

    test('toggleBits toggling all bits of a small number', () => {
        const n = 7; // Binary: 111
        const l = 0;
        const r = 2;
        expect(toggleBitsGivenRang(n, l, r)).toEqual(0); // Binary: 000
    });

    test('toggleBits toggling no bits (empty range)', () => {
        const n = 15; // Binary: 1111
        const l = 3;
        const r = 2; // Invalid range, should return the same number
        expect(toggleBitsGivenRang(n, l, r)).toEqual(15); // Binary: 1111
    });

    test('toggleBits toggling the least significant bit', () => {
        const n = 10; // Binary: 1010
        const l = 0;
        const r = 0;
        expect(toggleBitsGivenRang(n, l, r)).toEqual(2); // Binary: 0010
    });

    test('toggleBits toggling a number with all bits set', () => {
        const n = 31; // Binary: 11111
        const l = 1;
        const r = 3;
        expect(toggleBitsGivenRang(n, l, r)).toEqual(17); // Binary: 10001
    });
})