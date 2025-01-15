const {longestDistinctCharInString} = require("../longestDistinctChar");

describe('longestDistinctCharInString', () => {
    test('longestDistinctCharInString - regular', () => {
        const str = "abc";
        expect(longestDistinctCharInString(str)).toBe(3);
    });
    test('longestDistinctCharInString - single character', () => {
        const str = "aaaaa";
        expect(longestDistinctCharInString(str)).toBe(1);
    });

    test('longestDistinctCharInString - empty string', () => {
        const str = "";
        expect(longestDistinctCharInString(str)).toBe(0);
    });
    test('longestDistinctCharInString - space string', () => {
        const str = " ";
        expect(longestDistinctCharInString(str)).toBe(1);
    });

    test('longestDistinctCharInString - all distinct', () => {
        const str = "abcdefg";
        expect(longestDistinctCharInString(str)).toBe(7);
    });

    test('longestDistinctCharInString - mix of repeated and distinct', () => {
        const str = "abcabcbb";
        expect(longestDistinctCharInString(str)).toBe(3); // "abc"
    });



})