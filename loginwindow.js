const loginwindow = document.querySelector(".login_window");
const nameInput = document.querySelector("#login_name");

let currentLoginWindowLeft = 0;
let currentLoginWindowTop = 0;
let beforePositionLeft = currentLoginWindowLeft;
let beforePositionTop = currentLoginWindowTop;

const HIDDEN_CLASSNAME = "hidden";

function mouseClick(clickedPosition) {
    saveBeforePosition();
    loginwindow.classList.remove(HIDDEN_CLASSNAME);
    moveLoginwindowToClickedPosition(clickedPosition);
}

function whatKeyDown(click){
    if(click.key === 'Enter'){
        saveLoginName();
        hideLoginWindow();

        const login_explanation = document.querySelector("#login_explanation");
        login_explanation.innerText = `Hello ${userName}`;
    }
}

window.addEventListener("click", mouseClick);
nameInput.addEventListener("keypress", whatKeyDown);

/* --------------------------------------------------------------------------------- */
function moveLoginwindowToClickedPosition(clickedPosition){ 
    if(!isInnerX(clickedPosition) || !isInnerY(clickedPosition)){
        setLoginwindowPosition(clickedPosition);
        saveLoginwindowPosition(clickedPosition);
        return;
    }   
    saveCurrentPosition();
}

function saveBeforePosition() {
    beforePositionLeft = currentLoginWindowLeft;
    beforePositionTop = currentLoginWindowTop;
}
function saveCurrentPosition() {
    currentLoginWindowLeft = beforePositionLeft;
    currentLoginWindowTop = beforePositionTop
}

function isInnerX(clickedPosition){
    const currentLoginWindowRight = currentLoginWindowLeft + 300;
    return currentLoginWindowLeft < clickedPosition.clientX && clickedPosition.clientX < currentLoginWindowRight;
}
function isInnerY(clickedPosition){
    const currentLoginWindowBottom = currentLoginWindowTop + 150;
    return currentLoginWindowTop < clickedPosition.clientY && clickedPosition.clientY < currentLoginWindowBottom;
}

function setLoginwindowPosition(clickedPosition){
    loginwindow.style.left = clickedPosition.clientX + 'px';
    loginwindow.style.top = clickedPosition.clientY + 'px';
}
function saveLoginwindowPosition(clickedPosition){
    currentLoginWindowLeft = clickedPosition.clientX;
    currentLoginWindowTop = clickedPosition.clientY;
}

function saveLoginName() {
    const userName = nameInput.value;
    localStorage.setItem("userName", userName);
}
function hideLoginWindow(){
    loginwindow.classList.add(HIDDEN_CLASSNAME);
}