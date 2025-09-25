console.log('hello')

var a
let b

console.log(a)
console.log(b);


function example() {
    console.log(myVar); // undefined (hoisting)
    var myVar = 'hello';
    console.log(myVar); // 'hello'
  }
  
  example();

  let word='hello'

  console.log(`${word} world`);