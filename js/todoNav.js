const closeButton = document.querySelector("#close_button");
const menuOpenButton = document.querySelector("#todo_menu_open");

let close = false;

function set(){
    menuOpenButton.classList.remove("hidden");
}

function closeNavigator(){
    if(!close){
        document.querySelector("#todo_nav").style.width = 0;
        setTimeout(set, 600);
        close = true;
    }
}
closeButton.addEventListener("click",closeNavigator);


function menuOpen(){
    menuOpenButton.classList.add("hidden");
    document.querySelector("#todo_nav").style.width = 500+'px';
    close = false;
}
menuOpenButton.addEventListener("click", menuOpen);