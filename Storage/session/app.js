const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

add.addEventListener("click", addItems);
del.addEventListener("click", deleteItems);
clear.addEventListener("click", clearItems);

function addItems() {
    sessionStorage.setItem(addKey.value, addValue.value);
}

function deleteItems() {
    sessionStorage.removeItem(deleteKey.value);
}
function clearItems() {
    sessionStorage.clear();
}