// Variable definition
let hello: string = 'world';
hello = 'hola';

// Function definition
const getFullName = (name: string, surname: string): string => {
	return name + ' ' + surname;
};
console.log(getFullName('Iván', 'Verdugo'));

// Object definition
const user: { name: string; age: number } = {
	name: 'John',
	age: 35,
};

// Interface
interface User {
	name: string;
	age?: number;
	getMessage(): string;
}

const user2: User = {
	name: 'Juan',
	age: 53,
	getMessage() {
		return 'Hello' + name;
	},
};

const user3: User = {
	name: 'James',
	getMessage() {
		return 'Hello' + name;
	},
};
