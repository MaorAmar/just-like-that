const {findPermutations} = require('../findPermutations');

describe('findPermutations' , () => {
    test('findPermutations ABC', () => {
        const input = 'ABC';
        const output = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
        expect(findPermutations(input)).toEqual(output);
    })
    test('findPermutations ABC', () => {
        const input = 'ABSG';
        const output = [
            "ABGS",
            "ABSG",
            "AGBS",
            "AGSB",
            "ASBG",
            "ASGB",
            "BAGS",
            "BASG",
            "BGAS",
            "BGSA",
            "BSAG",
            "BSGA",
            "GABS",
            "GASB",
            "GBAS",
            "GBSA",
            "GSAB",
            "GSBA",
            "SABG",
            "SAGB",
            "SBAG",
            "SBGA",
            "SGAB",
            "SGBA"];
        expect(findPermutations(input)).toEqual(output);
    })
})