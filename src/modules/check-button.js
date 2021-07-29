function setButtonActive(id) {
	const activeButtonsToRemove = document.querySelectorAll('.tab.active');
	if (activeButtonsToRemove.length > 0) {
		activeButtonsToRemove.forEach(function(item) {
			item.classList.remove('active');
		})
	}

	const activeButtons = document.querySelectorAll(`#${id}`);
	if (activeButtons.length > 0) {
		activeButtons.forEach(function(item) {
			item.classList.add('active');
		})
	}
}

export default setButtonActive;