/*
var a = "Ahmet";
console.log(a);
// console.clear();
console.warn(a);
console.error(a);

//! Primitive

var x = 1; //? number
console.log(x);
x= 3.14; //? number
console.log(typeof x);

 var y = "String veri tipi";
 console.log(y);
 console.log(typeof y);

 var z = true;
 console.log(z);
 console.log(typeof z);

 var b = null;
 console.log(b);
 console.log(typeof b);

 var c;
 console.log(c);
 console.log(typeof c);
 
 
 //! Reference
 var numbers= [1,2,3,4,5];
 console.log(numbers);
 console.log(typeof numbers);
 console.log( numbers[3]);

//! Primitive vs Reference

//? Primitive
var q = 10;
var w = q;
console.log(q,w);
q = 20;
console.log(q,w);

//? Reference
var v = [1,2,3,4];
var c = v;
console.log(v,c);
v.push(5);
console.log(v,c);
*/

//! var vs let vs const

//! var
var a = 10
console.log(a)
var a = 20
console.log(a)

//! let
let b = 20
console.log(b)
// let b=30 //? syntaxError
let c, d
c = 50
d = 40
console.log(c, d)

//! const
const e = 10
console.log(e);
// e = 20 //? TypeError
console.log(e);

const f = [1,2,3]
console.log(f);
f.push(4,5)
console.log(f)

