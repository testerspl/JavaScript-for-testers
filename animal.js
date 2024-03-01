class Animal {
	constructor(name, color) {
		this.name = name;
		this.color = color
	}

	speak() {
		console.log(this.name + ' makes a noise.');
	}
}

class Dog extends Animal {

	constructor(name = 'Rufus', color, typeOfCoat = 'hair') {
		super(name, color)
		this.typeOfCoat = typeOfCoat

	}

	speak() {
		console.log(this.name + ' barks.');
	}

	getAnimalColor() {
		console.log(this.color);
	}

	getDogTypeOfCoat() {
		console.log(this.typeOfCoat);
	}
}

class Cat extends Animal {
	speak() {
		console.log(this.name + ' miau');
	}
}

let dog1 = new Dog('Rufus', 'Red');
dog1.speak();
dog1.getAnimalColor()
dog1.getDogTypeOfCoat()

let dog2 = new Dog('Bigos', 'White', 'long hair');
dog2.speak();
dog2.getAnimalColor()
dog2.getDogTypeOfCoat()

let dog3 = new Dog('Łapka', 'Black', 'bald');
dog3.speak();
dog3.getAnimalColor()
dog3.getDogTypeOfCoat()
