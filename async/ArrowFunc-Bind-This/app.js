const person = {
    age: 25,
    // tellAge: function () {
    //     console.log(this)
    //     console.log(this.age)
    // }.bind(this)
    tellAge: () => {
        console.log(this)
        console.log(this.age)
    }
}
person.tellAge()
console.log(this)
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
} const request = new Request()

request.get('https://jsonplaceholder.typicode.com/albums/67', function (err, response) {
    if (err === null) {
        console.log(response)
    } else {
        console.log(err)
    }
})