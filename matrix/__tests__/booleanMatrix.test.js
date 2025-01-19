const { booleanMatrix } = require('../booleanMatrix');

describe('booleanMatrix', () => {
    test('booleanMatrix - Regular case', () => {
        const matrix = [
            [0,0,0],
            [0,1,0],
            [0,0,0]
        ];
        const result = [
            [0,1,0],
            [1,1,1],
            [0,1,0]
        ];
        expect(booleanMatrix(matrix)).toEqual(result);
    });

    test('booleanMatrix - second', () => {
        const matrix = [
            [1,0],
            [0,0]
        ];
        const result = [
            [1,1],
            [1,0]
        ];
        expect(booleanMatrix(matrix)).toEqual(matrix);
    });
    test('booleanMatrix - Mix case', () => {
        const matrix = [
            [1, 0, 0],
            [0, 0, 1],
            [0, 0, 0]
        ];
        const result = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 0, 1]
        ];
        expect(booleanMatrix(matrix)).toEqual(result);
    });
});