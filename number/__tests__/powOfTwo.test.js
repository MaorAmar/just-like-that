const {powOfTwo} = require('../PowOfTwo.js');


describe('powOfTwo', () => {
    test('powOfTwo - 1 true', () => {
        expect(powOfTwo(1)).toBe(true); // הבינארי: '1'
    });

    test('powOfTwo - 2 true', () => {
        expect(powOfTwo(2)).toBe(true); // הבינארי: '10'
    });

    test('powOfTwo - 4 true', () => {
        expect(powOfTwo(4)).toBe(true); // הבינארי: '100'
    });

    test('powOfTwo - 8 true', () => {
        expect(powOfTwo(8)).toBe(true); // הבינארי: '1000'
    });

    test('powOfTwo - 0 false', () => {
        expect(powOfTwo(0)).toBe(false); // הבינארי: '0'
    });

    test('powOfTwo - 3 false', () => {
        expect(powOfTwo(3)).toBe(false); // הבינארי: '11'
    });

    test('powOfTwo - 16 true', () => {
        expect(powOfTwo(16)).toBe(true); // הבינארי: '10000'
    });


    test('powOfTwo - 1024 true', () => {
        expect(powOfTwo(1024)).toBe(true); // הבינארי: '10000000000'
    });

    test('powOfTwo - 1002244 false', () => {
        expect(powOfTwo(1002244)).toBe(false); // הבינארי: '10000000001'
    });
});