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
