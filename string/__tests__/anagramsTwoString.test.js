const {ifTwoStringAreAnagrams , ifTwoStringAreAnagramsObj} = require('../anagramsTwoString');

describe('If two string are anagrams', () => {
    test('anagramsTwoString - Regular str True', () => {
        const str1 = 'cheater';
        const str2 = 'teacher';
        const result1 = ifTwoStringAreAnagrams(str1, str2);
        const result2 = ifTwoStringAreAnagramsObj(str1, str2);
        expect(result1).toBeTruthy();
        expect(result2).toBeTruthy();
    });
    test('anagramsTwoString - Regular str False', () => {
        const str1 = 'cheater';
        const str2 = 'cheat';
        const result1 = ifTwoStringAreAnagrams(str1, str2);
        const result2 = ifTwoStringAreAnagramsObj(str1, str2);
        expect(result1).toBeFalsy();
        expect(result2).toBeFalsy();
    })
    test('anagramsTwoString - Empty strings', () => {
        const str1 = '';
        const str2 = '';
        const result1 = ifTwoStringAreAnagrams(str1, str2);
        const result2 = ifTwoStringAreAnagramsObj(str1, str2);
        expect(result1).toBeFalsy();
        expect(result2).toBeFalsy();
    });

    test('anagramsTwoString - with space', () => {
        const str1 = 'ya';
        const str2 = 'y a   ';
        const result1 = ifTwoStringAreAnagrams(str1, str2);
        const result2 = ifTwoStringAreAnagramsObj(str1, str2);
        expect(result1).toBeTruthy();
        expect(result2).toBeTruthy();    });

    test('anagramsTwoString - str with big letter', () => {
        const str1 = 'Cheater';
        const str2 = 'Teacher';
        const result1 = ifTwoStringAreAnagrams(str1, str2);
        const result2 = ifTwoStringAreAnagramsObj(str1, str2);
        expect(result1).toBeTruthy();
        expect(result2).toBeTruthy();
    });
})
