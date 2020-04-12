// function getTextFilet() {
//     fetch('text.txt')
//         .then(respone => respone.text())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

// function getJsonFile() {
//     fetch('example.json')
//         .then(data => data.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }
// function getExternalFile() {
//     fetch('https://api.exchangeratesapi.io/latest')
//         .then(data => data.json())
//         .then(data => console.log(data.rates.TRY))
//         .catch(err => console.log(err))
// }

// getTextFilet()
// getJsonFile()
// getExternalFile()

// FETCH GET İŞLEMLERİ

class Request {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(data => data.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}

const reques = new Request()
let albums
reques.get('https://jsonplaceholder.typicode.com/albums')
    .then(albums => console.log(albums))
    .catch(err => console.log(err))