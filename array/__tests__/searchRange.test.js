const {  searchRange } = require('../searchRange'); // שנה את שם הקובץ בהתאם

describe('searchRange tests', () => {
    test.each([
        [[5, 7, 7, 8, 8, 10], 8, [3, 4]],  // המספר 8 נמצא בטווח 3-4
        [[5, 7, 7, 8, 8, 10], 7, [1, 2]],  // המספר 7 נמצא בטווח 1-2
        [[5, 7, 7, 8, 8, 10], 6, [-1, -1]], // 6 לא נמצא
        [[1, 2, 3, 4, 5], 3, [2, 2]],      // 3 מופיע פעם אחת
        [[1, 1, 1, 1, 1], 1, [0, 4]]       // כל המערך מכיל 1
    ])('nums: %s, target: %s, expected range: %s',
        (nums, target, expected) => {
            expect(searchRange(nums, target)).toEqual(expected);
        }
    );
});