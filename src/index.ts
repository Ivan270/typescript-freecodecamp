// Working with DOM
const someElement = document.querySelector('.foo');

// listener
someElement.addEventListener('blur', (event) => {
	const target = event.target as HTMLInputElement;
	console.log(target.value);
});

// Classes
class User {
	protected firstName: string;
	private lastName: string;
	readonly unchangeableName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.unchangeableName = firstName;
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const usuario = new User('Juan', 'Perez');
console.log(usuario.getFullName());

// Interface along with class

interface MusicianInterface {
	getFullName(): string;
}
class Musician implements MusicianInterface {
	protected firstName: string;
	private lastName: string;
	readonly unchangeableName: string;
	static readonly maxAge = 50;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.unchangeableName = firstName;
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

// Heritage
class Drummer extends Musician {
	private drumBrand: string;

	setBrand(brand: string): void {
		this.drumBrand = brand;
	}
	getBrand(): string {
		return this.drumBrand;
	}
}
const drummer = new Drummer('Joaquin', 'Verdugo');

// Generics
// addId has a generic 'T'. All generic data types are written inside <>
// T extends object-> T by default should be an object
const addId = <T extends object>(obj: T) => {
	const id = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

interface UserAInterface {
	name: string;
}

const userA: UserAInterface = {
	name: 'Jack',
};

const result = addId<UserAInterface>(userA);

// Generic for interfaces
interface UserBInterface<T> {
	name: string;
	data: T;
}

const userB: UserBInterface<{ meta: string }> = {
	name: 'John',
	data: {
		meta: 'foo',
	},
};

// Generic allows to provide different data types, in this case an array
const userB2: UserBInterface<string[]> = {
	name: 'James',
	data: ['foo', 'bar', 'baz'],
};

// Pass several Data types

interface UserCInterface<T, V> {
	name: string;
	data: T;
	meta: V;
}

const userC: UserCInterface<{ meta: string }, string> = {
	name: 'Jimmy',
	data: {
		meta: 'foo',
	},
	meta: 'bar',
};
