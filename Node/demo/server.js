var Add = require('./addition.js');
var Calc1 = require('./calculator.js');
var { add, sub } = require('./calculator.js');
var Calc2 = require('./calculator2');
var { mul } = require('./calculator2');
var Person = require('./person.js');
var Son = require('./son.js');

const test = () => console.log('Demo Started');

console.log('Welcome to Demo');
console.log(test());
console.log('Add of 2 & 4 is ' + Add(2, 4));
console.log('Add of 2 & 4 is ' + Calc1.add(2, 4));
console.log('Add of 2 & 4 is ' + add(2, 4));
console.log('Sub of 2 & 4 is ' + sub(2, 4));
console.log('Add of 2 & 4 is ' + Calc2.add(2, 4));
console.log('Mul of 2 & 4 is ' + mul(2, 4));

var rahul = new Person();
rahul.setName('Rahul Kanna');
console.log('Welcome to ' + rahul.getName());

var obj = new Son();
console.log(obj.getName() + ', ' + obj.getGender() + ', is from ' + obj.getCity())
