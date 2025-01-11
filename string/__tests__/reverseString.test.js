const {reverseString} = require("../reverseString");

describe('reversString', () => {
    test('reverseString - regular', () => {
        const str = "Just Like That";
        expect(reverseString(str)).toBe("That Like Just");
    });

    test('reverseString - single word', () => {
        const str = "Hello";
        expect(reverseString(str)).toBe("Hello");
    });

    test('reverseString - empty string', () => {
        const str = "";
        expect(reverseString(str)).toBe("");
    });

    test('reverseString - string with punctuation', () => {
        const str = "Hello, World!";
        expect(reverseString(str)).toBe("World! Hello,");
    });

    test('reverseString - string with multiple spaces', () => {
        const str = "  This   is  a test  ";
        expect(reverseString(str)).toBe("test a is This");
    });

    test('reverseString - string with numbers and symbols', () => {
        const str = "123 456 #$%";
        expect(reverseString(str)).toBe("#$% 456 123");
    });

    test('reverseString - mixed case', () => {
        const str = "LoWeR uPpEr";
        expect(reverseString(str)).toBe("uPpEr LoWeR");
    });
})