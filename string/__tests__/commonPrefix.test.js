const {commonPrefix } = require('../commonPrefix');

describe('commonPrefix', () => {
    test('commonPrefix - Regular', () => {
        const arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
        const result1 = commonPrefix(arr);
        expect(result1).toBe("gee");
    });
    test('commonPrefix - Single element', () => {
        const arr = ["onlyone"];
        const result = commonPrefix(arr);
        expect(result).toBe("onlyone");
    });

    test('commonPrefix - No common prefix', () => {
        const arr = ["apple", "banana", "cherry"];
        const result = commonPrefix(arr);
        expect(result).toBe("");
    });

    test('commonPrefix - Empty array', () => {
        const arr = [];
        const result = commonPrefix(arr);
        expect(result).toBe("");
    });

    test('commonPrefix - All elements are the same', () => {
        const arr = ["test", "test", "test"];
        const result = commonPrefix(arr);
        expect(result).toBe("test");
    });
})
