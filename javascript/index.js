let factList = [];

function deleteCurrentElements() {
	const actualTextContainer = document.querySelector('p.random-text');
	if (actualTextContainer) {
		actualTextContainer.remove();
	}
}

function showFactData(data) {
	const textContainer = document.getElementById('text-container');
	const factText = document.createElement('p');
	const addBtn = document.createElement('img');
	addBtn.src = '../img/icon-star.png';
	factText.className = 'random-text';
	addBtn.className = 'add-btn';
	factText.textContent = data.text;
	textContainer.appendChild(factText);
	factText.appendChild(addBtn);

	addBtn.addEventListener('click', () => fillStarBtn(data.text));
}

function getFact() {
	deleteCurrentElements();

	return fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
		.then(response => response.json())
		.then(showFactData);
}

function fillStarBtn(text) {
	const addBtn = document.querySelector('.add-btn');
	if (addBtn) {
		addBtn.src = '../img/icon-star-fill.png';
		addFactToList(text);
	}
}

function createListElement(text) {
	const factsList = document.getElementById('facts-list');
	const factItem = document.createElement('li');
	const removeBtn = document.createElement('img');

	removeBtn.src = '../img/icon-star-fill.png';
	factItem.className = 'fact-item';
	removeBtn.className = 'remove-btn';

	factItem.innerHTML = text;
	factsList.appendChild(factItem);
	factItem.appendChild(removeBtn);

	removeBtn.addEventListener('click', () => removeFactFromList(factItem));
}

function addFactToList(text) {
	if (!factList.includes(text)) {
		factList.push(text);
		createListElement(text);

		console.log(factList);
	}
	else {
		displayErrorMessage();
	}
}

function removeFactFromList(factItem) {
	const factsList = document.getElementById("facts-list");
	const index = Array.from(factsList.children).indexOf(factItem);
	if (index > -1) {
		factList.splice(index, 1);
		factItem.remove();
		console.log(factList);
	}
}

function displayErrorMessage() {
	const errorMessage = document.getElementById('error-message');
	const errorText = document.getElementById('error-text');
	const closeBtn = document.getElementById('error-button');

	errorMessage.style.display = 'flex';
	errorText.innerHTML = 'This fact is already in your list!';

	closeBtn.addEventListener('click', () => hideErrorMessage());
}

function hideErrorMessage() {
	const errorMessage = document.getElementById('error-message');
	errorMessage.style.display = 'none';
}

module.exports = {
	getFact,
	addFactToList, 
	removeFactFromList,
	deleteCurrentElements,
	showFactData
}