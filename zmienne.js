// NOTE: Słowa kluczowe dla zmiennych

// var
// let
// const


// NOTE: Zmienne - przykład konstrukcji

var title = 'Gra o tron'
let year = 1983
let getYear = () => { }
const names = ['Krzysztof']


// NOTE: Przykład zachowania zmiennej var

// title = "Gra o tron"

// console.log(title)

// var title

// title = 500

// console.log(title)


// NOTE: Zasięg zmiennych

// NOTE: Funkcyjny

// var letter = 'C'

// function functionRange() {

//     var letter = 'A'

//     if (letter.length) {
//         console.log(letter) // zwraca A
//         var letter = 'B'
//         console.log(letter) // zwraca B
//     }

//     console.log(letter) // zwraca B
// }

// letter = 'D'
// var letter // NOTE: *Hoisting
// console.log(letter)

// functionRange()


// NOTE: Blokowy

// function blockRange() {
//     let letter = 'A'

//     if (letter.length) {
//         let letter
//         console.log(letter)
//         letter = 'B'
//         console.log(letter)
//     }

//     console.log(letter)
// }

// blockRange()

