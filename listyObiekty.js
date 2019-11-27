



// HACK: TABLICE

let osoby = ['Jan Kowalski', 'Adam Nowak', 'Maria Z', 'Janusz G', 'Marcin J']

console.log(osoby)

// const library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ]

// function compare_to_sort(x, y) {
//     if (x.title < y.title)
//         return -1
//     // if (x.title > y.title)
//     // return 1
//     return 0
// }

// console.log(library.sort(compare_to_sort))


// *****************************************

// METODA: push(elem1, elemN)

// osoby.push(1,2)
// console.log(osoby)

// METODA: unshift(elem1, elemN)

// osoby.unshift(1,2)
// console.log(osoby)

// METODA: concat(elem1, elemN)

// console.log(osoby.concat(osoby, osoby, osoby))

// METODA: indexOf(elem, from)

// console.log(osoby.indexOf('Jan Kowalski'))

// METODA: join(sep)

// console.log(osoby.join('-'))

// METODA: forEach(callback)
// osoby.forEach((value, index, arr) => {

// console.log(arr)
// })

// METODA: map(callback)
// let arr = [
//     {
//         login: 'login',
//         password: 'password'
//     },
//     {
//         login: 'login',
//         password: 'password'
//     },
//     {
//         login: 'login',
//         password: 'password'
//     }
// ]

// let passwordList = arr.map(pass => pass.password)

// console.log(passwordList)

// **************************************************************************
// METODA: filter(callback)

/*
callback
Funkcja sprawdzająca każdy element tablicy. Funkcja powinna zwrócić true, aby zatrzymać element lub false, aby odrzucić element. Funkcja przyjmuje trzy argumenty:
element
Element tablicy do przetworzenia.
index
Numer indeksu procesowanego elementu tablicy.
array
Tablica na której filter został wywołany
*/

// let ages = [32, 33, 16, 40]

// function checkAdult(age) {
//   return age >= 18
// }

// console.log(ages.filter(checkAdult))

// **************************************************************************
// METODA: reverse()

// console.log(osoby.reverse())

// **************************************************************************
// METODA: sort(callback)

// NOTE: Przykład 1
// stringArray = new Array("Blue","Humpback","Beluga")
// numericStringArray = new Array("80","9","700")
// numberArray = new Array(40,1,5,200)
// mixedNumericArray = new Array("80","9","700",40,1,5,200)

// function compareNumbers(a, b) {
//    return a - b
// }

// console.log("tablicaNapisów: " + stringArray.join())
// console.log("Posortowana: " + stringArray.sort())

// console.log("tablicaLiczbowa: " + numberArray.join())
// console.log("Posortowana bez funkcji porównującej: " + numberArray.sort())
// console.log("Posortowana z funkcją porównującą: " + numberArray.sort(compareNumbers))

// console.log("tablicaNapisówLiczbowych: " + numericStringArray.join())
// console.log("Posortowana bez funkcji porównującej: " + numericStringArray.sort())
// console.log("Posortowana z funkcją porównującą: " + numericStringArray.sort(compareNumbers))

// console.log("tablicaLiczbowaMieszna: " + mixedNumericArray.join())
// console.log("Posortowana bez funkcji porównującej: " + mixedNumericArray.sort())
// console.log("Posortowana z funkcją porównującą: " + mixedNumericArray.sort(compareNumbers))


// NOTE: Przykład 2

// function compareLength(a, b) {
//     return a.length - b.length
// }       
        
// tworzę pustą tablicę
// let arr = []

// arr.push('ccc', 'd', 'aa', 'bbbb')

// arr.sort(compareLength)
// console.log(arr) 
// ['d', 'aa', 'ccc', 'bbbb']


// NOTE: Przykład 3
// let arr = []
        
// let obj1 = {name: 'Mateusz', score: 12}
// arr.push(obj1);
        
// let obj2 = {name: 'Marek', score: 22}
// arr.push(obj2);
        
// let obj3 = {name: 'Michał', score: 4}
// arr.push(obj3)
        
// function compareScore(a, b) {
//     return a.score - b.score
// }
        
// arr.sort(compareScore)
        
// console.log(arr)

/*
[
    {name: 'Michał', score: 4}, 
    {name: 'Mateusz', score: 12}, 
    {name: 'Marek', score: 22}
]
*/

/*

jeśli zwróci wartość mniejszą od 0 – indeks elementu a będzie mniejszy niż indeks b,
jeśli zwróci 0 – pozostawia a oraz b w niezmienionej kolejności względem siebie,
jeśli zwraca wartość większą od 0 – indeks elementu a będzie większy niż indeks elementu b

*/

// **************************************************************************
// METODA: slice(begin, end)

// console.log(osoby.slice(1,2))

// **************************************************************************
// METODA: splice(begin, n)

// let arr = osoby.splice(1,2)

// console.log(arr)
// console.log(osoby)


// **************************************************************************
// HACK: OBIEKTY

// NOTE:Tworzenie pustego obiektu:

// let obj = {}


// NOTE: Inicjacja obiektu z wartościami:

// let obj = {
//     foo: "Hello",
//     bar: "World"
// }

// NOTE: Dostęp do właściwości obiektu:

// let obj = {
//     foo: "Hello",
//     bar: "World"
// }

// obj.foo     //"Hello"

// obj["foo"]  //"Hello"


// NOTE: Modyfikacja właściwości w obiekcie:

// let obj = {
//     foo: "Hello",
//     bar: "World"
// }

// obj.foo    = "hi" 
// obj["foo"] = "hi"


// NOTE: Przejdź pętlą przez klucze obiektu:

// for (let key in obj) {
//     console.log(key)
// }


// **************************************************************************
// let suffix = " name"

// let person = {
//     ["first" + suffix]: "Krzysztof",
//     ["last" + suffix]: "Kolodziejczyk"
// };

// console.log(person["first name"])
// console.log(person["last name"])

// **************************************************************************
// const something = { bar: "Foobar!" }
// const foo = 'bar'

// console.log(something[foo])

// **************************************************************************
// const obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}')

// console.log(obj.name)
// console.log(obj.age)

// **************************************************************************
// let foo = {
//     bar: 'Hello World',
//     baz: 'How are you doing?',
//     last: 'Quite alright'
// }

// let prop = 'last'
// let { bar, baz, [prop]: customName } = foo

// console.log(bar = 'Hello World')
// console.log(baz = 'How are you doing?')
// console.log(customName = 'Quite alright')