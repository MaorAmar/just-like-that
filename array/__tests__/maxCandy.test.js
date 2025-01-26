const {kidsWithCandies} = require('../maxCandy');

describe('kidsWithCandies', () => {
    test('Regular case with extraCandies = 3', () => {
        const candies = [2, 3, 5, 1, 3];
        const extraCandies = 3;
        const expected = [true, true, true, false, true];
        expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
    });

    test('All kids have the same', () => {
        const candies = [4, 4, 4, 4];
        const extraCandies = 1;
        const expected = [true, true, true, true];
        expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
    });

    test('regular check', () => {
        const candies = [1, 5, 3, 2];
        const extraCandies = 2;
        const expected = [false, true, true, false];
        expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
    });

    test('Single kid ', () => {
        const candies = [10];
        const extraCandies = 5;
        const expected = [true];
        expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
    });

    test('Empty candies array', () => {
        const candies = [];
        const extraCandies = 3;
        const expected = [];
        expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
    });
});