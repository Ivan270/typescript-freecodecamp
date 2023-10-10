// Variable definition
var hello = 'world';
hello = 'hola';
// Function definition
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName('Iván', 'Verdugo'));
// Object definition
var user = {
    name: 'John',
    age: 35,
};
var user2 = {
    name: 'Juan',
    age: 53,
    getMessage: function () {
        return 'Hello' + name;
    },
};
var user3 = {
    name: 'James',
    getMessage: function () {
        return 'Hello' + name;
    },
};
// union operator
var pageName = '1';
// Common usage
// if error doesn't exists, default value should be null
var errorMessage = null;
var person = null;
var popularTags = ['dragon', 'coffee'];
