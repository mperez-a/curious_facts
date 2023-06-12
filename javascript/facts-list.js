const showListBtn = document.getElementById('list-btn');
const closeListBtn = document.getElementById('close-btn');

showListBtn.addEventListener('click', () => {
	const popUpList = document.getElementById('popup-container');
	popUpList.style.display = 'flex';
});

closeListBtn.addEventListener('click', () => {
	const popUpList = document.getElementById('popup-container');
	popUpList.style.display = 'none';
});