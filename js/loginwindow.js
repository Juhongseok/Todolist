const loginwindow = document.querySelector("#login_window");
const nameInput = document.querySelector("#login_name");
const afterLogin = document.querySelector("#after_login");
const logOut = document.querySelector("#log_out");
let currentLoginWindowLeft = 0;
let currentLoginWindowTop = 0;
let beforePositionLeft = currentLoginWindowLeft;
let beforePositionTop = currentLoginWindowTop;
let isLogin = false;
const HIDDEN_CLASSNAME = "hidden";

function mouseClick(clickedPosition) {
    saveBeforePosition();
    if(!isLogin)
        loginwindow.classList.remove(HIDDEN_CLASSNAME);
    moveLoginwindowToClickedPosition(clickedPosition);
}

function whatKeyDown(click){
    if(click.key === 'Enter'){
        const userName = saveLoginName();
        hideLoginWindow();

        const login_explanation = document.querySelector("#login_explanation");
        login_explanation.innerText = `Hello ${userName}`;
        isLogin = true;
        
        afterLogin.classList.remove(HIDDEN_CLASSNAME);
    }
}

function logOutButtonClick(){
    afterLogin.classList.add(HIDDEN_CLASSNAME);
    setTimeout(() => {
        isLogin = false;    
    }, 100);
    login_explanation.innerText = "Click Anywhere To Login";
}

logOut.addEventListener("click", logOutButtonClick);
window.addEventListener("click", mouseClick);
nameInput.addEventListener("keypress", whatKeyDown);

/* --------------------------------------------------------------------------------- */
function moveLoginwindowToClickedPosition(clickedPosition){ 
    console.log("click");
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
    return userName;
}
function hideLoginWindow(){
    loginwindow.classList.add(HIDDEN_CLASSNAME);
}