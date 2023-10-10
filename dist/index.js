// Working with DOM
var someElement = document.querySelector('.foo');
// listener
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log(target.value);
});
