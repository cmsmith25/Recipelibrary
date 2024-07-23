const search = document.querySelector('.search-option input'); //stores the user's input in a variable.
const images = document.querySelectorAll('.image-container'); //stores the image in a variable.

search.addEventListener('keyup', () => { //keyup will begin searching the recipe titles dependent on every letter that has been entered, until there is enough input to narrow the result.
	let searchValue = search.value.trim().toLowerCase(); //converts the user's input to lowercase to prevent an error in the search.
	
	images.forEach((image) => {
		let imageName = image.dataset.name.toLowerCase(); //converts all image names to lowercase to prevent errors in the search.
		image.style.display = imageName.includes(searchValue) || searchValue === '' ? 'block' : 'none'; //displays the correct image based upon the value that is entered in the search bar.
	});
});