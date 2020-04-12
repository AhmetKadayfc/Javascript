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


// ASYNC AWAIT REQUEST İŞLEMLERİ


class Request {
    async get(url) {
        const response = await fetch(url)
        const responseData = await response.json()
        return responseData
    }
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        const responseData = await response.json()
        return responseData
    }
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        const responseData = await response.json()
        return responseData
    }
    async delete(url) {
        const response = await fetch(url, { method: 'DELETE' })
        return 'Silme işlemi başarıyla gerçekleştirildi'
    }
}

const request = new Request

request.get('https://jsonplaceholder.typicode.com/albums')
    .then(response => console.log(response))

request.post('https://jsonplaceholder.typicode.com/albums', { userId: 32, title: 'AC/DC' })
    .then(response => console.log(response))
    .catch(err => console.log(err))
request.put('https://jsonplaceholder.typicode.com/albums/54', { userId: 23, title: 'tarkan karma' })
    .then(response => console.log(response))
    .catch(err => console.log(err))
request.delete('https://jsonplaceholder.typicode.com/albums/55')
    .then(response => console.log(response))
    .catch(err => console.log(err))