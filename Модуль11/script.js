let wrapper = document.querySelector(".wrapper");
let listName = document.querySelector(".list_name");

let buttonAllList = document.querySelector(".all");

let addUserName = document.querySelector(".add_name");
let addUserScore = document.querySelector(".add_score");
let addUserId = document.querySelector(".add_id");
let addButton = document.querySelector(".btn_add");

let removeId = document.querySelector(".remove_id");
let removeButton = document.querySelector(".btn_remove");


let updateUserName = document.querySelector(".add_name_update");
let updateUserScore = document.querySelector(".add_score_update");
let updateUserId = document.querySelector(".add_id_update");
let updateButton = document.querySelector(".btn_update");

buttonAllList.addEventListener('click', function getAllUsers (){
    fetch(`http://fecore.net.ua/rest/`)
        .then(res => res.json())
        .then(res => {
        console.log(res);
    for(let i = 0; i < res.length; i++){
        listName.innerHTML += `<h3> ID: ${res[i].name}<h3>`;
        listName.innerHTML += `<h4>Name: ${res[i].name}<h4>`;
        listName.innerHTML += `<p>Score: ${res[i].score}</p>`;
    }
});
});

addButton.addEventListener('click', function addUser(){
    fetch(`http://fecore.net.ua/rest/?action=1&id=${addUserId.value}&name=${addUserName.value}&score=${addUserScore.value}`)
        .then(res => res.json())
        .then(res => {
        console.log();
});
    location.reload();
});

removeButton.addEventListener("click", function removeUser(){
    fetch(`http://fecore.net.ua/rest/?action=3&id=${removeId.value}`)
        .then(res => res.json())
        .then(res => {
        console.log();
});
    location.reload();
});

updateButton.addEventListener("click", function updateUser(){
    fetch(`http://fecore.net.ua/rest/?action=2&id=1&id=${updateUserId.value}&name=${updateUserName.value}1&score=${updateUserScore.value}`)
        .then(res => res.json())
        .then(res => {
        console.log();
});
    location.reload();
});