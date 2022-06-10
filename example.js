// console.log('Krzysztof'.slice(1, 4))

class Main {
	constructor() {}

	// logowanie tekstu w
	prtinText(myNewName = 'Krzysztof') {
		// logowanie za pomocą zmiennej
		let myName = 'Krzysztof';
		console.log(myName);

		// logowanie tekstu za pomocą parametru
		console.log(myNewName);
	}
}

// new Main().prtinText()
// new Main().prtinText('Marek')
// new Main().prtinText('Piotr')

let obj = {
	user1: {
		name: 'Krzysztof',
		age: 38,
	},
	user2: {
		name: 'Marek',
		age: 23,
	},
};

// Zwracana jest zawsze lista
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// Dodaj obiekt library który posiada 3 klucze książki o wartości obiektu zawierającego
// trzy klucze: tytuł, ilość stron, rok wydania
// wyloguj w konsoli dane każdej książki nie zawierające nawiasów

let library = {
	book1: {
		rokWYdania: 1900,
		tytuł: 'Czarny kot',
		iloscStron: 100,
	},
	book2: {
		rokWYdania: 3456,
		tytuł: 'Pan tadeusz',
		iloscStron: 100,
	},
	book3: {
		rokWYdania: 2000,
		tytuł: 'Wiersza Rafała Wojaczka',
		iloscStron: 100,
	},
};

// console.log(library.book1.tytuł + ' ' + library.book1.rokWYdania + ' ' + library.book1.iloscStron)

// Tworzymy listę na której wykonujemy funkcję forEach
// dla każdej książki w liście (Kluczu) wywołujemy logowanie w konsoli
// val jest nazwą książki pobieraną z początkowo wskazanej listy
// Object.keys(library).forEach((val) => {
// 	console.log(
// 		library[`${val}`].rokWYdania +
// 			' ' +
// 			library[`${val}`].tytuł +
// 			' ' +
// 			library[`${val}`].iloscStron
// 	);
// });

// console.log(`${library.book1.tytuł} ${library.book1.rokWYdania} ${library.book1.iloscStron}`)

let memberNumber = 'Marek';
// console.log("Numer wynosi " + (memberNumber === "1" ? "$2.00" : "$10.00"))

switch (memberNumber) {
	case 'Krzysztof':
		console.log('Moje imię');
		break;
	case 'Marek':
		console.log('2');
		break;
	default:
		console.log('Error');
}
