let factList = [];

const searchBtn = document.getElementById('search-btn');

function getFact() {
	const actualTextContainer = document.querySelector('.random-text');
	const actualAddBtn = document.querySelector('.add-btn');
	if (actualTextContainer && actualAddBtn) {
		actualTextContainer.remove();
		actualAddBtn.remove();
	}

	const textContainer = document.getElementById('text-container');
	const factText = document.createElement('p');
	const addBtn = document.createElement('img');
	addBtn.src = '../img/icon-star.png';
	factText.className = 'random-text';
	addBtn.className = 'add-btn';

	let isFavorited = false;

	fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
	.then(response => response.json())
	.then(data => {
		factText.textContent = data.text;
		textContainer.appendChild(factText);
		factText.appendChild(addBtn);

		addBtn.addEventListener('click', () => {
			if(!isFavorited) {
				addBtn.src = '../img/icon-star-fill.png';
				isFavorited = true;
				addFactToList(data.text);
			} /*else {
				addBtn.src = '../img/icon-star.png';
				isFavorited = false;
				removeFactFromList(data.text);
			}*/
		});
	});
}

function addFactToList(text) {
	if (!factList.includes(text)) {
		const factsList = document.getElementById('facts-list');
		const factItem = document.createElement('li');
		const removeBtn = document.createElement('img');
	
		removeBtn.src = '../img/icon-star-fill.png';
		factItem.className = 'fact-item';
		removeBtn.className = 'remove-btn';
		factList.push(text);
		factItem.innerHTML = text;
		factsList.appendChild(factItem);
		factItem.appendChild(removeBtn);

		removeBtn.addEventListener('click', () => removeFactFromList(factItem));
	}
	else {
		alert('This fact is already in your list!');
	}
}

function removeFactFromList(factItem) {
	const factsList = document.getElementById("facts-list");
	const index = Array.from(factsList.children).indexOf(factItem);
	if (index > -1) {
		factList.splice(index, 1);
		factItem.remove()
	}
}

searchBtn.addEventListener('click', getFact);