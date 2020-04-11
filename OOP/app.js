// console.log(this); //Global Scope

// const emp1 = {
//     name: "Ahmet",
//     age: 20,
//     showFunction: () => console.log("Bilgiler geliyooooor")
// }

// const emp2 = {
//     name: "Mehmet",
//     age: 26,
// }

// emp1.showFunction();
// console.log(emp1)
// console.log(emp2)


// function Employee() {
//     this.name = "Ahmet";
//     this.age = 20;
// }

// const emp1 = new Employee();
// const emp2 = new Employee();

// console.log(emp1)
// console.log(emp2)

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// console.log(this)
//     this.showInfos = () => console.log(this.name, this.age, this.salary);
// }

// const emp1 = new Employee("Ahnet", 20, 5450);
// emp1.showInfos();
// const emp2 = new Employee("Mehmet", 26, 5750);
// emp2.showInfos();


// PROTOTYPE

// const object = new Object();
// object.name = "Ahmet";
// console.log(object)

// function Employee(name, age) {
//     this.name = name,
//         this.age = age,
//         this.showInfos = () => console.log("Bilgiler yükleniyor"),
//     this.toString = () => console.log("Bu bir employee objesidir.")
// }

// const emp1 = new Employee("Ahmet", 20);

// console.log(emp1);
// console.log(emp1.toString());

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype.showInfos = function () {
//     console.log("Name: " + this.name + "\n" + "Age: " + this.age)
// };
// const emp1 = new Employee("Ahmet", 20);
// emp1.showInfos();
// console.log(emp1);


// OBJECT CREATE METODU

// const obj = {
//     test1: function () {
//         console.log("test 1")
//     },
//     test2: () => console.log("test 2")
// }
// console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Ahmet";
// emp.age = 20;
// console.log(emp);
// emp.test1();
// emp.test2();


// function Person() {

// }
// Person.prototype.test1 = () => console.log("Test 1");
// Person.prototype.test2 = () => console.log("Test 2");

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.myTset = () => console.log("Bana özel test")
// const emp1 = new Employee("Ahmet", 20);
// console.log(emp1);
// emp1.test1();


// CALL APPLY BIND

const obj1 = {
    number1: 10,
    number2: 20
}
const obj2 = {
    number1: 30,
    number2: 40
}

function addNumber(number3, number4) {
    console.log(this.number1 + this.number2 + number3 + number4);
}

addNumber(100, 200);

// addNumber.call(obj1, 100, 200);
// addNumber.call(obj2, 100, 200);

// addNumber.apply(obj1, [100, 200]);
// addNumber.apply(obj2, [100, 200]);

function getNumberTotal(number3, number4) {
    return this.number1 + this.number2 + number3 + number4;
}

const copyNumber = getNumberTotal.bind(obj1);
const copyNumber2 = getNumberTotal.bind(obj2);

console.log(copyNumber(100, 200))
console.log(copyNumber2(100, 200))