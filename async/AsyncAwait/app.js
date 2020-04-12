async function textFunc(data) {
    // return new Promise((resolve, reject) => {
    //     resolve(data)
    // })
    // return data
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bu bir değerdir")
        }, 3000);
    })
    let response = await promise

    return response
}

// textFunc("Hola").then(response => console.log(response))

async function testData(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === 'string') {
                resolve(data)
            } else {
                reject(new Error("Lütfen string türünden bir değer giriniz!"))
            }
        }, 3500);
    })

    let response = await promise
    return response
}

// testData('hello')
//     .then(response => console.log(response))
//     .catch(err => console.error(err))


async function getCurrency(url) {
    const response = await fetch(url) // Respone object

    const data = await response.json() // Json object

    return data
}

// getCurrency('https://api.exchangeratesapi.io/latest')
//     .then(data => data.rates.TRY)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

