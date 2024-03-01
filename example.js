// var myName = 1

// zasięg globalny
let myName;

const myNewName = 'Krzysiek';

// To jest klasa programistyczna, zawsze posiada te same elementy
class Main {

	// Metoda zbudowana jest zawsze z nazwy, nawiasu () i nawiasu {}
	logExampleTxt() {
		myName = 'JAVA';
		console.log('Krzysiek prowadzi szkolenie z ' + myName);

		let nextNewName = myNewName.replace('Krzysiek', 'Marek');

		console.log('Imię mojego kolegi z pracy ' + nextNewName);
	}
    getTesterzyplFromText() {
        let txt =
            'Jestem trenerem w Testerzy.pl i prowadzę różne szkolenia otwarte i zamknięte';
    
        return txt.substr(18, 29);
    }

}

// Zawsze kiedy używamy metody z klasy na końcu musi być nawias ()

// new tworzy nową referencję do klasy
// console.log(new Main().getTesterzyplFromText());


// let main = new Main()

// main.logExampleTxt()
// main.getTesterzyplFromText()



let users = [
	'Jan Kowalski',
	['Adam Nowak', [['Maria Z', 'Janusz G']]],
	'Maria Z',
	'Janusz G',
	[[['Maria Z', 'Janusz G']]]
];



// let url = 'http://mojastrona.pl?text=Uczę się stringów w Javascript'

// let newUrl = url.split(' ').join('_')

// console.log(newUrl)




let obj = {
    user1: ['Krzysztof', 'Kołodziejczyk'],
    'user 2': "Marek",
	'user 3': 'Ewelina',

}

obj.user1
obj["user 2"]

obj.user4
obj["user5"]

delete obj.user4
delete obj["user5"]

// // Funkcje zamieniają obiekt na listę / tablicę
// console.log(Object.keys(obj))
// console.log(Object.values(obj))






// Dodaj obiekt o nazwie library
// obiekt powinien zawierać trzy klucze książek
// każdy klucz książki powinien mieć wartość nowego obiektu
// w każdym obiekcie książki powinny zostać dodane trzy klucze: tytuł, autor, ilość stron
// Wartość dla każdego klucza tytuł, autor, ilość stron powinna zostać zawarta w tablicy
// Wyloguj informacje w konsoli na temat jednej wybranej książki bez nawiasów kwadratowych


// let library = {

// 	book1: {
//         title: ['Tytuł2'],
//         author: ['Autor1'],
//         numberPages: ['10']
//     },
// 	book2: {
// 		title: ['Tytuł3'],
//         author: ['Autor2'],
//         numberPages: ['347']
// 	},
// 	book3: {
//         title: ['Tytuł55'],
//         author: ['Autor3'],
//         numberPages: [458]
// 	}
// }
// console.log(library.book1.title + ' ' + library.book1.author + ' ' + library.book1.numberPages[0])