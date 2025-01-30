const {productExceptSelf} = require('../productOfArrayExceptSelf.js');

describe('productExceptSelf tests', () => {
    test('productExceptSelf first', () =>{
        const nums = [1,2,3,4];
        const result =[ 24, 12, 8, 6 ];
        expect(productExceptSelf(nums)).toEqual(result);
    })

    test('productExceptSelf with zero', () => {
        const nums = [1, 2, 0, 4];
        const result = [0, 0, 8, 0];
        expect(productExceptSelf(nums)).toEqual(result);
    });

    test('productExceptSelf with negative numbers', () => {
        const nums = [-1, 2, -3, 4];
        const result = [-24, 12, -8, 6];
        expect(productExceptSelf(nums)).toEqual(result);
    });

    test('productExceptSelf with ones', () => {
        const nums = [1, 1, 1, 1];
        const result = [1, 1, 1, 1];
        expect(productExceptSelf(nums)).toEqual(result);
    });

    test('productExceptSelf with large numbers', () => {
        const nums = [100, 200, 300, 400];
        const result = [24000000, 12000000, 8000000, 6000000];
        expect(productExceptSelf(nums)).toEqual(result);
    });
})