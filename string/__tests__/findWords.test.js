const {findWordsJsSyntax,findWordsObj,findWordsIf} = require('../findWords.js');

describe('findWords', () => {
    test('findWords first check', () => {
        const words = ["Hello","Alaska","Dad","Peace"];
        const result = [ 'Alaska', 'Dad' ];
        expect(findWordsJsSyntax(words)).toEqual(result);
        expect(findWordsObj(words)).toEqual(result);
        expect(findWordsIf(words)).toEqual(result);

    });
    test('findWords with empty array', () => {
        const words = [];
        const result = [];
        expect(findWordsJsSyntax(words)).toEqual(result);
        expect(findWordsObj(words)).toEqual(result);
        expect(findWordsIf(words)).toEqual(result);
    });

    test('findWords with no matching words', () => {
        const words = ["Hello", "Peace", "Quick"];
        const result = [];
        expect(findWordsJsSyntax(words)).toEqual(result);
        expect(findWordsObj(words)).toEqual(result);
        expect(findWordsIf(words)).toEqual(result);
    });

    test('findWords with all matching words', () => {
        const words = ["Dad", "Alaska", "You"];
        const result = ["Dad", "Alaska","You"];
        expect(findWordsJsSyntax(words)).toEqual(result);
        expect(findWordsObj(words)).toEqual(result);
        expect(findWordsIf(words)).toEqual(result);
    });


    test('findWords with long words', () => {
        const words = ["keyboarddddd", "AAAAlaaaaaaaaskaaaaaaaaa", "DadDadDadDad", "Peacefull"];
        const result = ["AAAAlaaaaaaaaskaaaaaaaaa" ,"DadDadDadDad"];
        expect(findWordsJsSyntax(words)).toEqual(result);
        expect(findWordsObj(words)).toEqual(result);
        expect(findWordsIf(words)).toEqual(result);
    });
})