var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo')
    }, 300)
})

promise1.then((value) => {
    console.log(value)
    // expected output: "foo"
})

console.log(promise1)
// expected output: [object Promise]


// NOTE: Obsługa błędów

var promise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('foo')
        reject(console.log("DEHDBRIBIJR"))
    }, 300)
})

promise1.then((value) => {
    console.log(valu3e)
    // expected output: "foo"
}).catch(err => console.log(err))

console.log(promise1)
  // expected output: [object Promise]