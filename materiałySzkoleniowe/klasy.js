



// NOTE: Klasa podstawowa

class Prostokat {
  constructor(wysokosc, szerokosc) {
    this.wysokosc = wysokosc
    this.szerokosc = szerokosc
  }
}


// NOTE: Dziedziczenie

// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   speak() {
//     console.log(this.name + ' makes a noise.')
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(this.name + ' barks.')
//   }
// }

// let dog = new Dog('Rufus')

// dog.speak()


// NOTE: Metody statyczne

class Punkt {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static odleglosc(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.sqrt(dx * dx + dy * dy)
  }
}

const p1 = new Punkt(5, 5)
const p2 = new Punkt(10, 10)

console.log(Punkt.odleglosc(p1, p2))