const {
    getFact, 
    addFactToList,
    removeFactFromList
} = require('../javascript/index.js')

// test('the function getFact should be defined', () => {
//     expect(getFact).toBeDefined()
// })
describe('function "getFact"', () => {
    it('should be declared', () => {
        expect(typeof getFact).toBe('function');
    })
})