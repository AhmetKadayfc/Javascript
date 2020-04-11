//! String Veri Tipine Dönüştürme

// let value;
// value = String(123)
// value = String(3.14)
// value = String(true)
// value = String(false)
// value = String(function(){console.log("sss")})
// value = String([1,2,3,4])
// value = (10).toString()
// value = (3.14).toString()

// console.log(value)
// console.log(typeof value)

//! Number Veri Tipine Dönüştürme

// let value
// value = Number("123")
// value = Number(null)
// value = Number(undefined)
// value = Number("Hello World")
// value = Number(function () {
//     console.log("sss")
// })
// value = Number("[1,2,3]")
// value = Number("3.14")
// value = parseFloat("3.14")
// value = parseInt("3")

// console.log(value);
// console.log(typeof value);

// const a = "Hello World" + 34
// const b = "79" + 34
// const c = Number("79") + 34
// console.log(a);
// console.log(b);
// console.log(c);

//! Operatörler ve Math Objesinin Metodları

// let value

// const a = 10
// const b = 4

// value = a + b
// value = a - b
// value = a * b
// value = a / b
// value = a % b

// value = Math.E
// value = Math.PI

// value = Math.round(3.7)
// value = Math.ceil(3.7)
// value = Math.floor(3.7)

// value = Math.sqrt(25) //?Karakök alma
// value = Math.abs(-7) //? Mutlak değer alma

// value = Math.pow(8,3) //? Üst hesaplama
// value = Math.min(1,100,-1,32)
// value = Math.max(1,100,-1,32)

// value = Math.random()
// value = Math.random() * 20
// value = Math.random() * 20 + 1
// value = Math.round(Math.random() * 20 + 1)

// console.log(value)

//? String Metodlar

// let value
// const firstName = "Ahmet"
// const lastName = "Kadayıfçı"
// const langs = "Python,Java,C++"

// value = firstName + " " + lastName
// value += " / Developer"
// value = firstName.toLowerCase()
// value = firstName.toUpperCase()
// value = firstName.length
// value = firstName.concat(" ", "Talha", " ", lastName)
// value = firstName[0]
// value = firstName.charAt(0)
// value = firstName[firstName.length -1]
// value = firstName.charAt(firstName.length -1)
// value = langs.split(",")
// value = langs.replace("Java","Javascript")
// value = langs.includes("C++")

// console.log(value);

//! Template Literal

const name = "Ahmet Kadayıfçı"
const department = "Bilişim"
const salary = 5000

const x = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary
console.log(x)
const y = `İsim: ${name}\nMaaş: ${salary}\nDepartman: ${department}`
console.log(y);

const html = "<ul>" +
    "<li>" + name + "</li>" +
    "<li>" + department + "</li>" +
    "<li>" + salary + "</li>" +
    "</ul>";
     document.body.innerHTML = html

     function a() {
         return "Hello"
     }
const html2 = `<ul>
     <li>${name}</li>
     <li>${department}</li>
     <li>${salary}</li>
     <li>${salary * 2}</li>
     <li>${155 / 2}</li>
     <li>${a()}</li>
     </ul>`
     document.body.innerHTML = html2
