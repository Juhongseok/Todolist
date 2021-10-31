const closeButton = document.querySelector("#close_button");
const menuOpenButton = document.querySelector("#todo_menu_open");
const todoNav = document.querySelector("#todo_nav");

let close = false;

function set(){
    menuOpenButton.classList.remove(HIDDEN_CLASSNAME);
}

function closeNavigator(){
    if(!close){
        todoNav.style.width = 0;
        setTimeout(set, 600);
        close = true;
    }
}

function menuOpen(){
    menuOpenButton.classList.add(HIDDEN_CLASSNAME);
    todoNav.style.width = 500+'px';
    close = false;
}

closeButton.addEventListener("click",closeNavigator);
menuOpenButton.addEventListener("click", menuOpen);