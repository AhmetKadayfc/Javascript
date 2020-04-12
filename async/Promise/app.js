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

getData(23)
    .then((response) => console.log(response))
    .catch((err) => console.error(err))