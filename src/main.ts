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
interface UserInterface {
	name: string;
	age?: number;
	getMessage(): string;
}

const user2: UserInterface = {
	name: 'Juan',
	age: 53,
	getMessage() {
		return 'Hello' + name;
	},
};

const user3: UserInterface = {
	name: 'James',
	getMessage() {
		return 'Hello' + name;
	},
};

// union operator
let pageName: string | number = '1';

// Common usage
// if error doesn't exists, default value should be null
let errorMessage: string | null = null;

interface PersonInterface {
	name: string;
	surname: string;
}

let person: PersonInterface | null = null;

// Type aliases
type ID = string;
type PopularTag = string;
// This property may not exist
type MaybePopularTag = PopularTag | null;

interface DeveloperInterface {
	id: ID;
	name: string;
	surname: string;
}
const popularTags: PopularTag[] = ['dragon', 'coffee'];
const dragonsTag: MaybePopularTag = null;
