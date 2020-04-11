// SET ITEM
// localStorage.setItem("keey", "valuee");
// localStorage.setItem("repeat", 50);

// GET ITEM

// const value = localStorage.getItem("repeat");
// console.log(value);
// console.log(typeof value);

// CLEAR
// localStorage.clear();

// localStorage.setItem("keey","valuee");
// localStorage.setItem("repeat", 50);

// console.log(localStorage.getItem("sports"));

// if (localStorage.getItem("Sports") === null) {
//     console.log("Böyle bir value bulunmuyor.");
// } else {
//     console.log("Sorguladığınız veri bulunuyor.");
// }

// Local Storage - ARRAY YAZMA

// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// localStorage.setItem("todos", todos);
// localStorage.setItem("yapılacaklar", JSON.stringify(todos));
// const value = localStorage.getItem("yapılacaklar");
// console.log(value);
// const value = JSON.parse(localStorage.getItem("yapılacaklar"));
// console.log(value);

const form = document.getElementById("todo-form");
const formInput = document.querySelector("#todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    let todos;
    let value = formInput.value;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();
}