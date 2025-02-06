const {palindromeRec} = require('../palindromeRec');

describe('palindromeRec tests',() =>{
    test.each([
        ['aba'],
        ['12321'],
        ['strts'],
        ['1'],
        ['11111'],
        ['']

    ])('function palindromeRec return true for str: %s',(str)=>{
        expect(palindromeRec(str)).toBeTruthy();
    })

    test.each([
        ['abc'],
        ['dsad'],
        ['55322184'],
        ['fdafadsddddss'],
        ['ds']
    ])('function palindromeRec return false for str: %s',(str)=>{
        expect(palindromeRec(str)).toBeFalsy();
    })

})