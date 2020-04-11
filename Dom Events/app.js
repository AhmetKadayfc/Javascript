// GENERAL EVENTS
// const filterInput = document.querySelector("#filter");
// const todoForm = document.getElementById("todo-form");

// filterInput.addEventListener("focus",function (e) {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);

//     console.log("Hello");
// })

// todoForm.addEventListener("submit",submitForm);

// function submitForm(element) {
//     console.log("Tam üstüne bastım x)");

//     element.preventDefault();
// }

// KLAVYE EVENTLERİ

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

// KEYPRESS

// todoInput.addEventListener("keypress",function (e) {
//     console.log(e.which);
//     console.log(e.key);
// });

// KEYDOWN

// todoInput.addEventListener("keydown",run);

// function run(e) {
// console.log(e.which);
//     console.log(e.key);
// }

// KEYUP

// todoInput.addEventListener("keyup", run);

// function run(e) {
//     console.log(e.which);
//     console.log(e.key);
// }

// EXAMPLE

// todoInput.addEventListener("keyup",changeHeader);

// function changeHeader(e) {
//     header.textContent = e.target.value;
// }

// MOUSE EVENTLERİ

const cardBody = document.querySelectorAll(".card-body")[1];
const cardTitle = document.querySelector("#tasks-title");

// CLICK EVENT
// cardTitle.addEventListener("click",run);

// DOUBLE CLICK EVENT
// cardTitle.addEventListener("dblclick",run);

// MOUSE DOWN
// cardTitle.addEventListener("mousedown",run);
// MOUSE UP
// cardTitle.addEventListener("mouseup",run);

// MOUSE OVER
// cardTitle.addEventListener("mouseover",run);
// cardTitle.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseover", run);

// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);

// function run(e) {
//     console.log(e.type);
// }

// INPUT EVENTLERİ

// const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e) {
//     console.log("Sayfa Yüklendi!");
// }

// FOCUS

// filter.addEventListener("focus",run);

// BLUR

// filter.addEventListener("blur",run);

// PASTE
// filter.addEventListener("paste", run);

// COPY
// filter.addEventListener("copy", run);

// CUT
// filter.addEventListener("cut", run);

// SELECT
// filter.addEventListener("select", run);

// function run(e) {
// console.log(e.type);
// }

