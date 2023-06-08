const {
    getFact, 
    addFactToList,
    removeFactFromList,
    checkTextAndBtn,
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

describe('function "checkTextAndBtn"', () => {
    it('should be declared', () => {
        expect(typeof checkTextAndBtn).toBe('function');
    });

    it('should be declared', () => {
        document.body.innerHTML =
            '<div id="test-container">' +
            '  <p class="random-text" />'
            '</div>';

        checkTextAndBtn();
        const testContainer = document.getElementById('test-container');
        expect(testContainer.children.length).toBe(0);
    });
})
