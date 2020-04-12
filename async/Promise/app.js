function getData(data) { // Promise objesini döndüren fonksiyon
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (typeof data === 'string') {
                // Olumlu mesaj
                resolve(data)
            } else {
                // Olumsuz mesaj
                reject(new Error("String türünde bir veri giriniz!"))
            }
        }, 3000);
    })
}

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === 'number') {
                resolve(number + 2)
            } else {
                reject("Numner türünde bir veri giriniz!")
            }
        },4000)
    })
}

getData("hola")
    .then((response) => console.log(response))
    .catch((err) => console.error(err))

addTwo(25)
    .then(response => {
        console.log(response)
        return response + 2
    })
    .then(response => console.log(response))
    .catch(err => console.error(err))