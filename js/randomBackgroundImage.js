const body = document.querySelector("body");

const backgroundImage = ["background1.jpg", "background2.jpg", "background3.jpg"];
const chosenImage = backgroundImage[Math.floor(Math.random() * backgroundImage.length)];
body.style.backgroundImage = `url("/todolist/image/${chosenImage}")`;

function change(){
    const chosenImage = backgroundImage[Math.floor(Math.random() * backgroundImage.length)];
    body.style.backgroundImage = `url("/todolist/image/${chosenImage}")`;
}
setInterval(change, 1000*60*10);