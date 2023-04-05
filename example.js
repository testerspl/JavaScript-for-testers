let exampleName;
const exampleText = 'Krzysiek';
const users = [];
// exampleText = 'Michał'

class Main {
	logText() {
		exampleName = "Przykładowy 'tekst'";
		console.log(exampleName);
	}

	logNameAsText() {
		let myNameBig = exampleText.replaceAll('Krzysiek', 'Michał');
		console.log("Przykładowy 'tekst'");

		let myFun = function () {
			let newName = 'Robert';
			console.log(myNameBig);
		};
	}
}

// new Main().logText()

let myNewList = 'K,r,z,y,s,z,t,o,f'.split(',');

// console.log(myNewList[8])
// myNewList.push('Krzysztof') // pop()

// console.log(myNewList)
// myNewList.unshift('Krzysztof') // shift()

// myNewList[7] = 'Krzysztof'
// console.log(myNewList)

// delete myNewList[7]

let osoby = [
	'Jan Kowalski',
	['Adam Nowak', [['Maria Z', 'Janusz G']]],
	'Maria Z',
	'Janusz G',
	[[['Maria Z', 'Janusz G']]],
	'Marcin J',
];

// osoby.forEach((value, index, array) => {
// 	osoby[index] = 'Krzysztof'

//     console.log(array)
// });

// let myText = 'Koty i psy to fajne zwierzaki'
// let myNewText = myText.split(' ').length

// console.log(myNewText)

// myText = 'Dziś trenerem jest Krzysztof'

// console.log(myNewText)

// let obj = {
// 	foo: 'Hello',
// 	bar: 'World',
// };

// obj['foo'];

// obj.myName = 'Krzysztof';

// obj['my-NewName'] = 'Michał';

// obj.myName = 'Kasia';

// delete obj['foo'];

// console.log(obj);

// Dodaj obiekt library który posiada 3 klucze książki, o wartości obiektu zawierającego
// trzy klucze: tytuł, ilość stron, rok wydania
// wyloguj w konsoli dane z obiektu dla wybranej książki, nie zawierające nawiasów

let library = {
	book1: { 
        tytuł: 'Czarny kot',
        'ilość stron': '400',
        'rok wydania': 742 
    },
	book2: {
        tytuł: 'Pan tadeusz',
        'ilość stron': '246',
        'rok wydania': '578' 
    },
	book3: {
		tytuł: 'Wiersze Rafała Wojaczka',
		'ilość stron': 900,
		'rok wydania': {
            '1': 98
        },
	},
};

// console.log('Tytuł: ' + library.book3.tytuł + '\n' + 'Ilość stron: ' + library.book3['ilość stron'] + '\n' + 'Rok wydania: ' + library.book3['rok wydania'][1])


console.log(library.book3)