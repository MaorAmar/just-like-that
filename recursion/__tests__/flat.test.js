const {flat} = require('../flat.js');

describe('flat tests', () => {
    test('flat first', () => {
        const arr = [1,2,[3,[4]],5,[[6]]];
        const res = flat(arr);
        expect(res).toEqual([1,2,3,4,5,6]);
    })
    test('flat sec', () => {
        const arr = [[[[[[[[1]]]]]]]];
        const res = flat(arr);
        expect(res).toEqual([1]);
    })
})