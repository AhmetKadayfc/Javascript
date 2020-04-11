// const merhaba = function(){
//     console.log("Hello");
// }

// merhaba();


// ARROW FUNCTION

// const merhaba = (name) => {
//     console.log(`Hola ${name}`);
// }

// const merhaba = name => {
//     console.log(`Hola ${name}`);
// }

// const merhaba = name => console.log(`Hola ${name}`);

// const cube = function (x) {
//     return x * x * x;
// }

// const cube = x => x * x * x;
// console.log(cube(7))
// merhaba("ahmet");


// DESTRUCTING

// let number1, number2;
// arr = [100, 200, 300, 400];


// number1 = arr[0];
// number2 = arr[1]

// [number1, number2] = arr;
// const [number1,number2] = arr;

// console.log(number1, number2);


// OBJE DESTRUCTING

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// }

// const {a,b,c} = numbers;

// const {a:number1,b:number2,c:number3} = numbers;

// console.log(number1,number2,number3);

// FUNCTION DESTRUCTING

// const getLangs = () => ["Python", "Java", "C++"];
// const [lang1, lang2, lang3] = getLangs();
// console.log(lang1, lang2, lang3);

// OBJE

// const person = {
//     name: "Ahmet Talha",
//     year: 1999,
//     salary: 3000,
//     showInfos: () => console.log("Bilgiler yükleniyoor...")
// }
// const {
//     name: isim,
//     year: yil,
//     salary: maas,
//     showInfos: goster
// } = person;
// goster();
// console.log(isim, yil, maas);

// SPREAD OPERATOR

// const langs = ["Python", "C++", "Java", "Php"]

// console.log(langs[0], langs[1], langs[2], langs[3]);
// console.log(...langs);

// const langs2 = ["Javascript", "c#", ...langs]
// console.log(langs2);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, b, ...number2] = numbers;
// console.log(a, b);
// console.log(number2);

// const addNumber = (a, b, c) => console.log(a + b + c);

// const numbers = [100,200,300];
// addNumber(...numbers);

// FOR IN & FOR OF

// const person = {
//     name: "Ahmet Talha",
//     age: 20,
//     salary: 3000
// }
// const langs = ["Python", "Ruby", "Dart", "Go"];
// const name = "Ahmet";

// OBJECT
// for (let prop in person) {
//     console.log(prop, person[prop])
// }

// ARRAY
// for (let index in langs) {
//     console.log(index, langs[index])
// }

// for(let index in name){
//     console.log(index,name[index]);
// }


// For Of
// for(let value of person){
// console.log(value);
// }

// for (const value of langs) {
//     console.log(value);
// }

// for (const character of name) {
//     console.log(character)
// }

// MAPLER

// let myMap = new Map();
// console.log(myMap);

// const key1 = "Ahmet";
// const key2 = {
//     a: 10,
//     b: 20
// };
// const key3 = () => 2;

// SET

// myMap.set(key1, "String değer");
// myMap.set(key2, "Object Literal değer");
// myMap.set(key3, "Function değer");

// GET

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

// MAP BOYUTU

// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara", 6);
// cities.set("İstanbul", 34);
// cities.set("Gaziantep", 27);

// ForEach

// cities.forEach(function (value, key) { 
//     console.log(key, value)
// })

// For of

// for (let [key, value] of cities) {// Destructing yapısı
//     console.log(key, value);
// }
// for (let value of cities.values()) {
//     console.log(value);
// }
// for (let value of cities.keys()) {
//     console.log(value);
// }

// ARRAY'lerden MAP OLUŞTURMA

// const arr = [
//     ["key1", "value1"],
//     ["key2", "value2"]
// ]
// const lastMap = new Map(arr);
// console.log(lastMap);

// MAPLERDAN ARRAY OLUŞTURMA

// const cities = new Map();
// cities.set("Ankara", 6);
// cities.set("İstanbul", 34);
// cities.set("Adaba", 01);

// const arr = Array.from(cities);
// console.log(arr);


// REFERANS TİPLER

// let a = "Ahmet";
// let b = "Ahmet";

// if (a === b) {
//     console.log("Niceee");
// }

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// if (arr1 === arr2) {
//     console.log("imposible")
// }

// const person1 = {
//     name: "Ahmet",
//     age: 20
// };

// const person2 = {
//     name: "Ahmet",
//     age: 20
// };

// if (person1 === person2) {
//     console.log("imposible")
// }
// let key = [1, 2, 3]
// const cities = new Map();
// cities.set("İstanbul", 34);
// cities.set("Gaziantep", 27);
// cities.set([1, 2, 3], 27);
// cities.set(key, 27);

// console.log(cities.get("İstanbul"));
// console.log(cities.get([1, 2, 3]));
// console.log(cities.get(key));


// SETLER - KÜMELER

// const mySet = new Set();

// mySet.add(100)
// mySet.add(100)
// mySet.add(3.14)
// mySet.add("Ahmet")
// mySet.add(true)
// mySet.add([1, 2, 3])
// mySet.add({
//     a: "ahmet",
//     b: "mehmet"
// })

// const mySet2 = new Set([100, 3.14, "Ahmet", true]);

// console.log(mySet);
// console.log(mySet2);

// Size
// console.log(mySet.size)

// Delete

// mySet.delete(3.14)
// console.log(mySet)

// Has METODU

// console.log(mySet.has("Ahmet"))
// console.log(mySet.has(100))
// console.log(mySet.has("Talha"))
// console.log(mySet.has([1, 2, 3]))

// mySet.forEach((value) => {
//     console.log(value);
// })

// for(let value of mySet){
//     console.log(value);
// }

// const array = Array.from(mySet);

// console.log(array);