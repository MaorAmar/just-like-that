const {sortRandB , sortRandB2} = require("../sortRandB");

describe('sortRandB', () => {
    test('sortRandB regular' , () => {
        const str = ['R','R','R','B'];
        const result = [ 0, 1, 1, 1 ];
        expect(sortRandB(str)).toEqual(result);
        //expect(sortRandB2(str)).toEqual(result);

    })
    test('sortRandB regular B' , () => {
        const str = ['R','B','R','B','B','B','B','R','R','B'];
        const result = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];

        expect(sortRandB(str)).toEqual(result);
        //expect(sortRandB2(str)).toEqual(result);

    })
})