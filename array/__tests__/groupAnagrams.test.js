const {groupAnagrams} = require('../groupAnagrams')

describe('groupAnagrams tests', () => {
    test.each([
        [["eat", "tea", "tan", "ate", "nat", "bat"], [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]],
        [[""], [[""]]],
        [["a"], [["a"]]],
        [["abc", "bca", "cab", "xyz", "zyx", "yxz"], [["abc", "bca", "cab"], ["xyz", "zyx", "yxz"]]],
    ])('strs: %s, expected groups: %s',
        (strs, expected) => {
            expect(groupAnagrams(strs).map(group => group.sort())).toEqual(expected.map(group => group.sort()));
        }
    );
});
