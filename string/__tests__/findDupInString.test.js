const {findDupInString ,findFirstNonDup} = require("../dupInString");

describe('findDupInString', () => {
    test('findDupInString-regular test', () => {
        const str = "ababc";
        const result = ["a","b"];
        expect(findDupInString(str)).toEqual(result);
    })
    test('findDupInString - zero dup', () => {
        const str = "abc";
        const result = [];
        expect(findDupInString(str)).toEqual(result);
    })
    test('findDupInString - all the same', () => {
        const str = "aaaaaa";
        const result = ["a"];
        expect(findDupInString(str)).toEqual(result);
    })
    test('findDupInString - case sensitivity', () => {
        const str = "aA";
        const result = [];
        expect(findDupInString(str)).toEqual(result);
    });

    test('findDupInString - special characters', () => {
        const str = "!@!!##";
        const result = ["!", "#"];
        expect(findDupInString(str)).toEqual(result);
    });

    test('findDupInString - numbers and letters', () => {
        const str = "a1b1c1";
        const result = ["1"];
        expect(findDupInString(str)).toEqual(result);
    });

    test('findDupInString - long string with mixed characters', () => {
        const str = "aabbccddeeffgghhiijjkkllmmnn";
        const result = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
        expect(findDupInString(str)).toEqual(result);
    });

    test('findDupInString - whitespace included', () => {
        const str = "a b a c b";
        const result = ["a", "b"];
        expect(findDupInString(str)).toEqual(result);
    });
})


describe('findFirstNonDup', () => {
    test('findFirstNonDup-regular test', () => {
        const str = "ababc";
        const result = "c";
        expect(findFirstNonDup(str)).toBe(result);
    })

    test('findFirstNonDup - empty', () => {
        const str = "";
        const result = "not found";
        expect(findFirstNonDup(str)).toBe(result);
    })

    test('findFirstNonDup - one char', () => {
        const str = "a";
        const result = "a";
        expect(findFirstNonDup(str)).toBe(result);
    })

    test('findFirstNonDup - case sensitivity', () => {
        const str = "Aa";
        const result = "A";
        expect(findFirstNonDup(str)).toBe(result);
    });

    test('findFirstNonDup - special characters', () => {
        const str = "!!##$%";
        const result = "$";
        expect(findFirstNonDup(str)).toBe(result);
    });

    test('findFirstNonDup - numbers and letters', () => {
        const str = "1122334";
        const result = "4";
        expect(findFirstNonDup(str)).toBe(result);
    });

    test('findFirstNonDup - only duplicates', () => {
        const str = "aa bbcc";
        const result = "not found";
        expect(findFirstNonDup(str)).toBe(result);
    });

    test('findFirstNonDup - whitespace included', () => {
        const str = "a b c a b";
        const result = "c";
        expect(findFirstNonDup(str)).toBe(result);
    });

    test('findFirstNonDup - long string with no non-duplicates', () => {
        const str = "aabbccddeeffgghhiijjkkllmmnnoopp";
        const result = "not found";
        expect(findFirstNonDup(str)).toBe(result);
    });

})

