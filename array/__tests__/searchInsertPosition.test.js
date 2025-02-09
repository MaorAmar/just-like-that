const { searchInsertPosition} = require('../searchInsertPosition'); // שנה את שם הקובץ בהתאם

describe('searchInsertPosition tests', () => {
    test.each([
        [[1, 3, 5, 6], 5, 2],
        [[1, 3, 5, 6], 2, 1],
        [[1, 3, 5, 6], 7, 4],
        [[1, 3, 5, 6], 0, 0],
        [[1], 0, 0]
    ])('nums: %s, target: %s, expected index: %s',
        (nums, target, expected) => {
            expect(searchInsertPosition(nums, target)).toBe(expected);
        }
    );
});

