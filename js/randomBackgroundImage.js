const body = document.querySelector("body");
const backgroundImage = ["background1.jpg", "background2.jpg", "background3.jpg"];

function change(){
    const randomNumber = Math.random() * backgroundImage.length
    const chosenImage = backgroundImage[Math.floor(randomNumber)];
    body.style.backgroundImage = `url("/todolist/image/${chosenImage}")`;
}
change();
setInterval(change, 1000*60*10);