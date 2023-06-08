const {
    getFact, 
    addFactToList,
    removeFactFromList
} = require('../javascript/index.js')

describe('function "getFact"', () => {
    it('should be declared', () => {
        expect(typeof getFact).toBe('function');
    });
})

describe('function "addFactToList"', () => {
    it('should be declared', () => {
        expect(typeof addFactToList).toBe('function');
    });
})

describe('function "removeFactFromList"', () => {
    it('should be declared', () => {
        expect(typeof removeFactFromList).toBe('function');
    });
})
