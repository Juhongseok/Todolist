const loginwindow = document.querySelector(".login_window");
const nameInput = document.querySelector("#login_name");
const body = document.querySelector("body");

let currentLoginWindowLeft = 0;
let currentLoginWindowTop = 0;
let beforePositionLeft = currentLoginWindowLeft;
let beforePositionTop = currentLoginWindowTop;

const HIDDEN_CLASSNAME = "hidden";

window.addEventListener("click", function(click){
    beforePositionLeft = currentLoginWindowLeft;
    beforePositionTop = currentLoginWindowTop;
    loginwindow.classList.remove(HIDDEN_CLASSNAME);
    moveLoginwindowToClickPosition(click);
    
})

nameInput.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        const userName = nameInput.value;
        localStorage.setItem("userName", userName);
        loginwindow.classList.add(HIDDEN_CLASSNAME);
        const login_explanation = document.querySelector("#login_explanation");
        login_explanation.innerText = `Hello ${userName}`;
    }
})


function moveLoginwindowToClickPosition(click){    
    if(isInnerX(click) && isInnerY(click)){
        currentLoginWindowLeft = beforePositionLeft;
        currentLoginWindowTop = beforePositionTop
    }else{
        setLoginwindowPosition(click);
        saveLoginwindowPosition(click);
    }
}

function isInnerX(click){
    const currentLoginWindowRight = currentLoginWindowLeft + 300;
    if(currentLoginWindowLeft < click.clientX && click.clientX < currentLoginWindowRight){
        return true;
    }else{
        return false;
    }
}
function isInnerY(click){
    const currentLoginWindowBottom = currentLoginWindowTop + 150;
    if(currentLoginWindowTop < click.clientY && click.clientY < currentLoginWindowBottom){
        return true;
    }else{
        return false;
    }
}

function setLoginwindowPosition(click){
    loginwindow.style.left = click.clientX + 'px';
    loginwindow.style.top = click.clientY + 'px';
}

function saveLoginwindowPosition(click){
    currentLoginWindowLeft = click.clientX;
    currentLoginWindowTop = click.clientY;
}