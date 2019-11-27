



// NOTE: Słowa kluczowe dla zmiennych

// var
// let
// const


// NOTE: Zmienne - przykład konstrukcji

// var title = 'Gra o tron' // String
let year = 1983 // Number
let getYear = () => { } // Function
const names = ['Krzysztof'] // Array


// NOTE: Przykład zachowania zmiennej var

// let title

// title = "Gra o tron"

// console.log(title)



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

let letter = 'A'

function blockRange() {
    var letter = 'A'

    if (letter.length) {
        let letter = 'B'
        let letter
        console.log(letter)

        console.log(letter)
    }

    console.log(letter)
}

blockRange()