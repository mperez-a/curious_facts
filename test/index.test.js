const fetchMock = require('jest-fetch-mock');

const {
    getFact, 
    addFactToList,
    removeFactFromList,
    deleteCurrentElements,
    showFactData
} = require('../javascript/index.js');

describe('function "getFact"', () => {
    it('should be declared', () => {
        expect(typeof getFact).toBe('function');
    });

    it('should return a promise', () => {
        expect(getFact()).toBeInstanceOf(Promise);
    });
})

describe('function "addFactToList"', () => {
    it('should be declared', () => {
        expect(typeof addFactToList).toBe('function');
    });
    it('should add a fact to the list', () => {
        document.body.innerHTML =
            '<ul id="facts-list">' +
            '  <li class="fact-item" />' +
            '</ul>';

        addFactToList('text');
        const factsList = document.getElementById('facts-list');
        expect(factsList.children.length).toBe(2);
    });
})

describe('function "removeFactFromList"', () => {
    it('should be declared', () => {
        expect(typeof removeFactFromList).toBe('function');
    });

    it('should remove a fact from the list', () => {
        document.body.innerHTML =
            '<ul id="facts-list">' +
            '  <li class="fact-item" />' +
            '</ul>';

        removeFactFromList(document.querySelector('.fact-item'));
        const factsList = document.getElementById('facts-list');
        expect(factsList.children.length).toBe(0);
    });
})

describe('function "deleteCurrentElements"', () => {
    it('should be declared', () => {
        expect(typeof deleteCurrentElements).toBe('function');
    });

    it('should check if the text-container and the random-text exist and remove it', () => {
        document.body.innerHTML =
            '<div id="text-container">' +
            '  <p class="random-text" />' +
            '</div>';

        deleteCurrentElements();
        const textContainer = document.getElementById('text-container');
        expect(textContainer.children.length).toBe(0);
    });
})

describe('function "showFactData"', () => {
    it('should be declared', () => {
        expect(typeof showFactData).toBe('function');
    });
    it('should create a paragraph with a random-text class', () => {
        document.body.innerHTML =
            '<div id="text-container">' +
            '</div>';

        showFactData({text: 'text'});
        const textContainer = document.getElementById('text-container');
        expect(textContainer.children[0].className).toBe('random-text');
    });
    it('should create an image with an add-btn class', () => {
        document.body.innerHTML =
            '<div id="text-container">' +
            '</div>';

        showFactData({text: 'text'});
        const textContainer = document.getElementById('text-container');
        expect(textContainer.children[0].children[0].className).toBe('add-btn');
    });
})
