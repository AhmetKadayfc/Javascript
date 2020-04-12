function getTextFilet() {
    fetch('text.txt')
        .then(respone => respone.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

function getJsonFile() {
    fetch('example.json')
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
function getExternalFile() {
    fetch('https://api.exchangeratesapi.io/latest')
        .then(data => data.json())
        .then(data => console.log(data.rates.TRY))
        .catch(err => console.log(err))
}

getTextFilet()
getJsonFile()
getExternalFile()