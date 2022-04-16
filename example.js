const { singleSourceFile } = require('nightwatch/lib/utils');

let myName;

const myNewNam = '';

let users = {
	name: 'Krzysztof',
	nip: '7834646924342',
};

class Main {
	printText() {
		myName = '<p><strong><em>PHP Exercises</em></strong></p>';
		let myNewStr = myName.substr(15, 13);
		// myName.slice(15, 28)
	}
}

new Main().printText();

// Dodaj obiekt który zawiera 3 książki
// każda książka powinna zaiwierać obiekt którego kluczami będą:
// rok wydania, tytuł, ilość stron
// logujemy w konsoli informacje na temat książek
// dla każdej książki w osobnym console.log

let library = {
	book1: { year: '4444', title: 'The Road Ahead', pages: 44444 },
	book2: {
		year: '2008',
		title: 'Walter Isaacson',
		pages: 444,
	},
	book3: {
		year: '1987',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		pages: 567,
	},
};

console.log(
	`Year: ${library.book1.year}\nTitle: ${library.book1.title}\nPages: ${library.book1.pages}`
);


// console.log(library.book1.year + ' ' + library.book1.title + '\n' + library.book1.pages)