const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstBody = document.querySelectorAll(".card-body")[0];
const secondBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearTodos = document.querySelector("#clear-todos");

eventListener();

function eventListener() {

    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadTodosToUi)
    secondBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearTodos.addEventListener("click", allTodosClear);
}

function allTodosClear(e) {
    if (confirm("Tümü silmek istediğinizden emin misiniz?")) {
        while (todoList.firstElementChild !== null) {
            todoList.removeChild(todoList.firstElementChild)
        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            // listItem.setAttribute("style", "display : none !important");
            listItem.classList.remove("d-flex");
            listItem.classList.add("d-none");
        } else {
            listItem.classList.remove("d-none");
            listItem.classList.add("d-flex");
        }
    });

}

function addTodo(e) {
    let newTodo = todoInput.value.trim(); {

    }
    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo giriniz...")
    } else {
        AddTodoToUi(newTodo);
        AddTodoToStorage(newTodo);
        showAlert("success", "Todo başarıyla eklendi...")

    }
    todoInput.value = "";
    e.preventDefault();
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1500)
}

function AddTodoToUi(newTodo) {

    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);

}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo başarıyla silindi...");
    }
}

function getTodoFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodoFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    });
}

function loadTodosToUi() {
    let todos = getTodoFromStorage();
    todos.forEach(function (todo) {
        AddTodoToUi(todo);
    });
}

function AddTodoToStorage(newTodo) {
    let todos = getTodoFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}