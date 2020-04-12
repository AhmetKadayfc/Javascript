// const langs = ["Python","C#","Java"]

// langs.forEach((lang)=>{
//     console.log(lang)
// })

document.getElementById('btn').addEventListener('click', function () {
    console.log('clicked')
})

function process1(callback) {
    setTimeout(() => {
        console.log('process 1')
        callback()
    }, 3000)
}
function process2() {
    setTimeout(() => {
        console.log('process 2')
    }, 2000)
}

process1(process2)
// process2()

const langs = ["Python", "C#", "Java"]

addLang = (lang, callback) => {
    setTimeout(() => {
        langs.push(lang)
        console.log("Added lang")
        callback()
    }, 2000)
}

getAllLang = () => {
    setTimeout(() => {
        langs.forEach((lang) => {
            console.log(lang)
        })
    }, 1000)
}

addLang('Javascript', getAllLang);
