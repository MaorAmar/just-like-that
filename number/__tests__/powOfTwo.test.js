const {powOfTwo ,powOfTwo2} = require('../PowOfTwo.js');


describe('powOfTwo', () => {
    test('powOfTwo - 1 true', () => {
        expect(powOfTwo(1)).toBe(true); // הבינארי: '1'
        expect(powOfTwo2(1)).toBe(true);
    });

    test('powOfTwo - 2 true', () => {
        expect(powOfTwo(2)).toBe(true); // הבינארי: '10'
        expect(powOfTwo2(2)).toBe(true);
    });

    test('powOfTwo - 4 true', () => {
        expect(powOfTwo(4)).toBe(true); // הבינארי: '100'
        expect(powOfTwo2(4)).toBe(true);

    });

    test('powOfTwo - 8 true', () => {
        expect(powOfTwo(8)).toBe(true); // הבינארי: '1000'
        expect(powOfTwo2(8)).toBe(true);
    });

    test('powOfTwo - 0 false', () => {
        expect(powOfTwo(0)).toBe(false); // הבינארי: '0'
        expect(powOfTwo2(0)).toBe(false);
    });

    test('powOfTwo - 3 false', () => {
        expect(powOfTwo(3)).toBe(false); // הבינארי: '11'
        expect(powOfTwo2(3)).toBe(false);
    });

    test('powOfTwo - 16 true', () => {
        expect(powOfTwo(16)).toBe(true); // הבינארי: '10000'
        expect(powOfTwo2(16)).toBe(true);
    });


    test('powOfTwo - 1024 true', () => {
        expect(powOfTwo(1024)).toBe(true); // הבינארי: '10000000000'
        expect(powOfTwo2(1024)).toBe(true);
    });

    test('powOfTwo - 1002244 false', () => {
        expect(powOfTwo(1002244)).toBe(false); // הבינארי: '10000000001'
        expect(powOfTwo2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      (1002244)).toBe(false);
    });
});