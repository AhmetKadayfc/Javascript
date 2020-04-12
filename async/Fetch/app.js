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

class Request {

    // FETCH GET İŞLEMLERİ
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(data => data.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    // FETCH POST İŞLEMLERİ
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json; charset=UTF-8 " }
            })
                .then(response => response.json())
                .then(response => resolve(response))
                .catch(err => reject(err))
        })
    }
}
const request = new Request()
let albums
// FETCH GET İŞLEMLERİ
request.get('https://jsonplaceholder.typicode.com/albums')
    .then(albums => console.log(albums))
    .catch(err => console.log(err))

// FETCH POST İŞLEMLERİ
request.post('https://jsonplaceholder.typicode.com/albums', {
    userId: 23, title: 'AC/DC'
})
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err))