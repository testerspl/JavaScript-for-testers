// NOTE: 1

// Stwórz zmienne każdego typu i wypisz je w konsoli. Wypisz również ich typ.

// let imie = 'Krzysztof'
// let age = 36
// let list = [1, 2, 34]


// console.log(`${imie} ${age}${list}`)

// NOTE: 2

/*
Mamy przykładowe zmienne:

const number1 = "23"
const number2 = "34"

Wypisz ich typ w konsoli, a następnie dodaj do siebie tak, by wyszedł wynik 57
*/

// const number1 = "23"
// const number2 = "34"

// console.log(Number(number1) + Number(number2))

// NOTE: Zadanie 1

// Stwórz zmienną text z dowolnym zdaniem. Wypisz w konsoli to zdanie i jego długość.

// console.log('Koty i psy to fajne zwierzaki'.length)

//  NOTE:   Zadanie 2

// Mamy tekst: Koty i psy to fajne zwierzaki Wypisz w konsoli liczbę wyrazów w tym zdaniu.

// console.log('Koty i psy to fajne zwierzaki'.split(' ').length)

//   NOTE:  Zadanie 3

// Stwórz nową zmienną z imieniem pisanym małymi literami. Następnie używając odpowiednich funkcji dla stringów popraw to imię tak by zaczynało się z dużej litery.

// let name = 'krzysztof'

// let bigLetter = name.substr()



// console.log('krzysztof')

//  NOTE:   Zadanie 4

// Mamy zmienną:

// const text = "Ala ma kota";

// Sprawdź czy występuje w niej słowo "kot".Jeżeli tak - wypisz w konsoli "Zdanie zawiera słowo kot", w przeciwnym razie wypisz "Zdanie nie zawiera słowa kot".

// console.log(text.includes('kot'))



//   NOTE:  Zadanie 5

// Korzystając z poznanych funkcji dla stringów zamień poniższy tekst:

// const text = "Uczę się stringów w C++";

// na

// "Uczę się stringów w Javascript"

// Po zamianie tekstu zwróć pozycje słowa Javascript

// console.log(text.replace('C++', 'JAVASCRIP'))


// NOTE: Zadanie 6

// Powiedzmy, że mamy zmienną z adresem strony:

// let url = "http://mojastrona.pl"

// Chcemy do tego adresu po znaku zapytania wstawić zmienną "text", którą potem ewentualnie mogła by odczytać inna podstrona.Zmienna ta powinna mieć wartość tekstu z 5 zadania:

let url = "http://mojastrona.pl?text=Uczę się stringów w Javascript"

// Jak wiesz, spacji i podobnych znaków nie może być w adresie strony.Za pomocą odpowiednich zmiennych, dodawania i wykorzystując odpowiednie metody uzyskaj prawidłowy odpowiednio zakodowany adres url.


console.log(url.split(' ').join('-'))

//  NOTE:   Zadanie 7

// Mamy zmienną:

// const text = "Ala ma kota";

// Wypisz w konsoli:

// tekst pisany małymi literami
// tekst pisany dużymi literami
// tekst pisany naprzemiennie dużymi i małymi literami
// zamień imię Ala na Ola i wypisz wynik w konsoli


// NOTE: Zadanie 8

// Korzystając z obiektu Math stwórz kilka randomowych zmiennych z zakresu 10 - 100000. Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednej linii. Przykładowo:

// 10
// 102
// 1
// 1002
// 92020

// Wykorzystaj tutaj funkcję padStart().Zakładamy, że pojedyncza linia powinna mieć długość 10 znaków.


//  NOTE:   Zadanie 9

// Wygeneruj pod zmienną uniqueID tekst będący losowym ciągiem liter i cyfr o długości 20.