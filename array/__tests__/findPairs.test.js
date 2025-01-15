const {findAllPairs, findParirsEqualToZero} = require("../findPairs");


describe('findPairs', () => {
    test('findPairs-regular test', () => {
        const arr = [1,2,3,1,2,3];
        const k = 6;
        const result = [[3,3]];
        expect(findAllPairs(arr,k)).toEqual(result);
    })
    test('findPairs - zero pairs', () => {
        const arr = [1,2,3];
        const k = 6;
        const result = [];
        expect(findAllPairs(arr,k)).toEqual(result);
    })
    test('findPairs - few answers', () => {
        const arr = [1,2,4,5,3];
        const k = 7;
        const result = [[5,2],[3,4]];
        expect(findAllPairs(arr,k)).toEqual(result);
    })

})

describe('findPairs equal to zero', () => {
    test('findPairs equal to zero', () => {
        const arr = [1,2,3,1,2,3];
        const result = [1,1];
        expect(findParirsEqualToZero(arr)).toEqual(result);
    })
    test('findPairs equal to zero - sec', () => {
        const arr = [1,2,3];
        const result = [1,2];
        expect(findParirsEqualToZero(arr)).toEqual(result);
    })
    test('findPairs equal to zero - 3', () => {
        const arr = [1,2,4,5,3];
        const result = [1,2];
        expect(findParirsEqualToZero(arr)).toEqual(result);
    })
    test('findPairs equal to zero - 4', () => {
        const arr = [1,1,1,1];
        const result = [1,1];
        expect(findParirsEqualToZero(arr)).toEqual(result);
    })

})
