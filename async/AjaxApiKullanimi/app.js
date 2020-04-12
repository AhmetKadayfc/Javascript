document.getElementById('convert').addEventListener('click', convertToMany)
function convertToMany() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.exchangeratesapi.io/latest', true)
    xhr.onload = function () {
        if (this.status == 200) {
            const rate = JSON.parse(this.responseText)
            const tl = rate.rates.TRY
            const euroInput = Number(document.getElementById('euro').value)
            const tlInput = document.getElementById('tl')
            tlInput.value = euroInput * tl
            // console.log()
        }

    }
    xhr.send()

}

setTimeout(() => {
    console.log('hellooo')
}, 5000)

let i = 0
let value = setInterval(() => {
    i++
    console.log("sayı : ", i)
}, 1000);

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(value)
})

}

