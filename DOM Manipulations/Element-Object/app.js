// let element;

// element = document.getElementById("todo-form");
// element = document.getElementById("tasks-title");

// element = document.getElementsByClassName("list-group-item");

// element = document.getElementsByTagName("div");
// element = document.getElementsByTagName("li");

// Query Selector - Css Selector - Tek bir element

// element = document.querySelector("#todo-form");
// element = document.querySelector("#tasks-title");

// element = document.querySelector(".list-group-item");

// element = document.querySelector("div");
// element = document.querySelector("li");

// QuerySelectorAll - Tüm Elementleri Seç

// element = document.querySelectorAll(".list-group-item");

// element.forEach(function(elem){
//     console.log(elem);
// });

// console.log(element); 

// const element = document.querySelector("#clear-todos");

// ELEMENT ÖZELLİKLERİ

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// STYLE VE ELEMENT ÖZELLİKLERİNİ DEĞİŞTİRME

// element.classList = "btn btn-info w-100";
// element.style.color = "#000";
// element.style.padding= "15px 0";
// element.href = "https://www.google.com.tr";
// element.target = "_blank"
// element.textContent = "Her şeyi sil";
// element.innerHTML = "<span class='text-warning'>Helloo brooo</span>"

// const elements = document.querySelectorAll(".list-group-item:nth-child(even)");
// elements.forEach(function(element){
//     element.style.color = "red";
//     element.style.background = "#eee";
// })

// console.log(element);

// ELEMENTLERİN ÜZERİNDE GEZİNME

// let value;
// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardRow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardRow;

// // CHILD NODES

// value = todoList.childNodes;
// value = todoList.childNodes[0];

// // CHILDREN - ELEMENT

// value = todoList.children;
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[2].textContent = "Değiştii";

// value = cardRow;
// value = cardRow.children;
// value = cardRow.children[2].children[1].textContent = "Bu da değiştii";

// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.children.length;
// value = todoList.childElementCount

// value = cardRow;
// value = cardRow.parentElement;
// value = cardRow.parentElement.parentElement;

// ELEMENT KARDEŞLERİ

// value = todo;

// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling.previousElementSibling;

// YENİ ELEMAN OLUŞTURMA

// const newButton = document.createElement("a");
// const cardBody = document.getElementsByClassName("card-body")[1];

// newButton.id = "clear-todos";
// newButton.className = "btn btn-warning";
// newButton.href = "https://www.google.com.tr";
// newButton.target = "_blank";

// newButton.appendChild(document.createTextNode("Farklı sayfaya git!"));
// cardBody.appendChild(newButton);

// console.log(newButton);

// DİNAMİK ELEMENT SİLME

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item")

// REMOVE METODU

// todos[1].remove();

// REMOVE CHILD

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[3]);
// console.log(todos);

// REPLACE

// const cardBody = document.querySelectorAll(".card-body")[1];
// const newElement = document.createElement("h3");
// newElement.className = "class-title";
// newElement.id = "tasks-title"
// newElement.textContent = "Yeni Todolar";

// ESKİ Element

// const oldElement = document.querySelector("#tasks-title");

// cardBody.replaceChild(newElement,oldElement);

// console.log(newElement);

const todoInput = document.getElementById("todo");
const todoForm = document.getElementById("todo-form");
todoForm.removeAttribute("method");
let element;

element = todoInput;
element = todoInput.classList;

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

// element = todoInput.placeholder;
// element = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder","Nabeer");
// todoInput.setAttribute("name","Input");
// todoInput.removeAttribute("name");

// element = todoInput.hasAttribute("class"); // var mı yok mu?

// console.log(element);

console.log();