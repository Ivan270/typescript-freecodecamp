// Working with DOM
const someElement = document.querySelector('.foo');

// listener
someElement.addEventListener('blur', (event) => {
	const target = event.target as HTMLInputElement;
	console.log(target.value);
});
