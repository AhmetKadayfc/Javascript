// const person = {
//     age: 25,
//     // tellAge: function () {
//     //     console.log(this)
//     //     console.log(this.age)
//     // }.bind(this)
//     tellAge: () => {
//         console.log(this)
//         console.log(this.age)
//     }
// }
// person.tellAge()
// console.log(this)

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }

    get(url, callback) {
        this.xhr.open('GET', url)

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, JSON.parse(this.xhr.responseText))
            } else {
                callback("Yanlış giden bir şeyler var!", null);
            }
        }
        this.xhr.send()
    }

    post(url, data, callback) {
        this.xhr.open('POST', url)
        this.xhr.setRequestHeader("Content-type", "application/json")
        this.xhr.onload = () => {
            if (this.xhr.status == 201) {
                callback(null, this.xhr.responseText)
            } else {
                callback('Yanlış giden bir şeyler var', null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
    put(url, data, callback) {
        this.xhr.open('PUT', url)
        this.xhr.setRequestHeader("Content-type", "application/json")
        this.xhr.onprogress = () => {
            console.log('İşlem gerçekleşiyor...')
        }
        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText)
            } else {
                callback('Yanlış giden bir şeyler var!', null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
}

const request = new Request()

// request.get('https://jsonplaceholder.typicode.com/albums', function (err, response) {
//     if (err === null) {
//         console.log(response)
//     } else {
//         console.log(err)
//     }
// })

// request.post('https://jsonplaceholder.typicode.com/albums', { userId: 2, title: 'Tom' }, function
//     (err, response) {
//     err === null ? console.log(response) : console.log(err)
// })

request.put('https://jsonplaceholder.typicode.com/albums/56', { userId: 43, title: 'Ac/DC' }, function (err, response) {
    err === null ? console.log(response) : console.log(err)
})