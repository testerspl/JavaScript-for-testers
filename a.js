// let promise1 = new Promise((resolve, reject) => {
// 	setTimeout(function () {
// 		resolve(
// 			fetch('url', {
// 				method: 'POST',
// 				body: {},
// 			})
// 		);
// 	});
// });

// let promise2 = new Promise((resolve, reject) => {
// 	setTimeout(function () {
// 		resolve(
// 			promise1.then((value) => {
// 				console.log(value);

// 				// expected output: "foo"
// 			})
// 		);
// 	});
// });

// let myFun = (callback) => {
// 	let sum = console.log(2 + 2);
// 	return sum;
// };

// myFun((returnedSum) => {
// 	console.log(returnedSum);
// });

// let myFun = () => {


// let lastName = 'Kołodziejczyk'

// 	return lastName
// }




let randomString = (len = 10, type = 'letters') => {
	type = type && type.toLowerCase();
	let str = '',
		i = 0,
		min = type == 'letters' ? 10 : 0,
		max = type == 'number' ? 10 : 62;
	for (; i++ < len; ) {
		let r = (Math.random() * (max - min) + min) << 0;
		str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
	}
	return str;
}

console.log(randomString(10))