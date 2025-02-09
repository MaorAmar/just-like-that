const {josephus} = require('../josephus');

describe('josephus tests' , () => {
    test.each([
        [4,2,3],
        [3,6,1],
        [4,4,1],
        [3,7,2],
        [3,9,1],
    ])('the fun gets: %s persons, and killNum: %s then returns safe place: %s',
        (n,k,result) =>{
        expect(josephus(n,k)).toBe(result);
        }
        );
});