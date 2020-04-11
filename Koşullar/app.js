const number = 4;
if (number === "3") {
    console.log("selamunkable");
} else if (number === 3) {
    console.log("Helal lan sana");
} else {
    console.log("Yanlış değer")
}

switch (number) {
    case 1:
        console.log("1. İşlem")
        break;
case 2:
    console.log("2. İşlem")
    break;
    default:
        console.log("hatalı işlem")
        break;
}
function sayHi(){
    console.log("Seelaaaamm!")
}
sayHi();

(function(name){
    console.log("IIFE"+ name)
})(" Ahmet")

const database ={
    host : "localhost",
    add : function(){
        console.log("Eklendi!")
    },
    get: function(){
        console.log("Elde edildi!")
    },
    update: function(id){
        console.log(`id: ${id} güncellendi!`)
    },
    delete: function(id){
        console.log(`id: ${id} silindi!`)
    }
}
console.log(database.host)
database.add()
database.get()
database.update(5)
database.delete(5)