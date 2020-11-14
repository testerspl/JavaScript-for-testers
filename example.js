// console.log('Treść');

// let p1 = 'a';
// let p2 = 'b';
// let p3 = 'c';

// console.info('Testowa treść z parametrami: %s, %s, %s', p1, p2, p3);

const number1 = '23';
const number2 = '34';

// Wypisz ich typ w konsoli, a następnie dodaj do siebie tak, by wyszedł wynik 57

// console.log(Number(number1) + Number(number2))

// console.log('Koty i psy to fajne zwierzaki'.length)

// console.log('Koty i psy to fajne zwierzaki'.split(' ').length)

// let myFun = (name = 'krzysztof') => {

// console.log(name.toUpperCase())
// }

// let obj = {
// 	key1: 'Name',
// 	key2: {
// 		login: 'Login',
// 		pass: 'Pass',
// 	},
// 	key3: ['Krzysztof', 'Marek', 'Kasia'],
// };


// console.log(obj.key1 + ' ' + obj.key2.login + ' ' + obj.key2.pass + ' ' + obj.key3)
// console.log(Object.keys(obj.key2))

let list = []

list.push('Krzysztof', 'Name', 2, {}, [])

for(let index in list) {

console.log(list[index])
}