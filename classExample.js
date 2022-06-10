class Names {
	constructor(names) {
		this.namesList = names;
	}

	getNamesList() {
		return (this.namesList = ['Krzysztof', 'Marek', 'Piotr']);
	}
}

class NewNames extends Names {
	constructor() {
		super();
	}

	getNewNamesList(myName = 'Kasia') {
		let newListOfNames = this.getNamesList();
		newListOfNames.push(myName);

		return newListOfNames;
	}

	getNameToUpper(index = 0) {
		return this.getNewNamesList()[index].toUpperCase();
	}
}

console.log(new NewNames().getNameToUpper());
console.log(new NewNames().getNameToUpper(1));
console.log(new NewNames().getNameToUpper(3));

// Stwórz dwie nowe klasy
// Stwórz metody w klasach:
// Metoda 1: zwracająca listę imion, maksymalnie pięciu
// Metoda 2: zwracająca wybrane imię z listy zapisane dużymi literami.
// Metoda musi zawierać warunek np. lista[index] === parametr

// Zaimplementuj dziedziczenie (extends)

// Wywołaj metody własne, oraz dziedziczone w obu klasach z uwzględnieniem podanego warunku:
// W klasie dziedziczącej do listy imion powinno zostać dodane minimum jedno dodatkowe imię
