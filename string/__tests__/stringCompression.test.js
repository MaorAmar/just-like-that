const {stringCompression , stringCompressionInPlace} = require('../stringCompression.js');

describe('stringCompression', () => {
    test('stringCompression leetcode check 1' , () => {
        const chars = ["a","a","b","b","c","c","c"];
        const result = ["a","2","b","2","c","3"];
        expect(stringCompression(chars)).toEqual(result);
        expect(stringCompressionInPlace(chars)).toEqual(result);
    });
    test('stringCompression leetcode check 2' , () => {
        const chars = ["a"];
        const result = ["a"];
        expect(stringCompression(chars)).toEqual(result);
        expect(stringCompressionInPlace(chars)).toEqual(result);
    });
    test('stringCompression leetcode check 3' , () => {
        const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
        const result = ["a","b","1","2"];
        expect(stringCompression(chars)).toEqual(result);
        expect(stringCompressionInPlace(chars)).toEqual(result);
    });
    test('stringCompression empty' , () => {
        const chars = [];
        const result = [];
        expect(stringCompression(chars)).toEqual(result);
        expect(stringCompressionInPlace(chars)).toEqual(result);
    });
});