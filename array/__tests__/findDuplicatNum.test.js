const {removeDupNumberInArrayInPlace,removeDupNumberInArray ,findDuplicatNumberInArray} = require('../findDuplicatNum');

describe('findDuplicatNum', () => {
    test('findDuplicatNum-regular test', () => {
        const arr = [1,2,3,1,2,3];
        const result = [0,1,2];
        expect(findDuplicatNumberInArray(arr)).toEqual(result);
    })
    test('findDuplicatNum - zero dup', () => {
        const arr = [1,2,3];
        const result = [];
        expect(findDuplicatNumberInArray(arr)).toEqual(result);
    })
    test('findDuplicatNum - all the same', () => {
        const arr = [1,1,1,1,1,1,1];
        const result = [0,1,2,3,4,5];
        expect(findDuplicatNumberInArray(arr)).toEqual(result);
    })

})

describe('removeDuplicatNum', () => {
    test('removeDuplicatNum-regular test', () => {
        const arr = [1,2,3,1,2,3];
        const result = [1,2,3];
        expect(removeDupNumberInArray(arr)).toEqual(result);
    })
    test('removeDuplicatNum - zero dup', () => {
        const arr = [1,2,3];
        const result = [1,2,3];
        expect(removeDupNumberInArray(arr)).toEqual(result);
    })
    test('removeDuplicatNum - all the same', () => {
        const arr = [1,1,1,1,1,1,1];
        const result = [1];
        expect(removeDupNumberInArray(arr)).toEqual(result);
    })

})

describe('removeDuplicatNumInPlace', () => {
    test('removeDuplicatNumInPlace-regular test', () => {
        const arr = [1,2,3,1,2,3];
        const result = [1,2,3];
        expect(removeDupNumberInArrayInPlace(arr)).toEqual(result);
    })
    test('removeDuplicatNumInPlace - zero dup', () => {
        const arr = [1,2,3];
        const result = [1,2,3];
        expect(removeDupNumberInArrayInPlace(arr)).toEqual(result);
    })
    test('removeDuplicatNumInPlace - all the same', () => {
        const arr = [1,1,1,1,1,1,1];
        const result = [1];
        expect(removeDupNumberInArrayInPlace(arr)).toEqual(result);
    })

})