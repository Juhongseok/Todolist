const everyday = document.querySelector("#date");
const time = document.querySelector("#time");
const week = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT', 'SUN'];

function getClock(){
    const getDay = new Date();
    const year = String(getDay.getFullYear()).padStart(2, "0");
    const month = String(getDay.getMonth()+1).padStart(2, "0");
    const date = String(getDay.getDate()).padStart(2, "0");
    const day = getDay.getDay();

    console.log(month);
    const hour = String(getDay.getHours()).padStart(2, "0");
    const minute = String(getDay.getMinutes()).padStart(2, "0");
    const seconds = String(getDay.getSeconds()).padStart(2, "0");

    everyday.innerText = `${year}-${month}-${date} ${week[day]}`;
    time.innerText = `${hour} : ${minute} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);