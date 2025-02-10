const {maxArea} = require('../maxArea');

describe('maxArea tests', () => {
    test.each([
        [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
        [[1, 1], 1],
        [[4, 3, 2, 1, 4], 16],
        [[1, 2, 1], 2],
        [[],0],
        [[6, 9, 3, 4, 5, 8], 32]
    ])('height: %s, expected max area: %s',
        (height, expected) => {
            expect(maxArea(height)).toBe(expected);
        }
    );
});
