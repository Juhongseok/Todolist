const calcedDday = document.querySelector("#calc_box");
const ul = document.querySelector(".day_list");

function calcDay(event){
    event.preventDefault();
    const targetDay = getTargetDate(event);
    const today = getTodayDate();
    const remain = getRemainTime(targetDay, today);
    setCalcedDday(remain);
}
ul.addEventListener("click", calcDay);

/*----------------------------------------------------------------------*/

function getTargetDate(event){
    const target = event.target.innerText;
    const day = parseInt(target.substr(-3, 2));
    const month = parseInt(target.substr(-6, 2));
    return new Date(2022, month, day);
}
function getTodayDate(){
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
}
function getRemainTime(targetDay, today){
    return targetDay.getTime() - today.getTime();
}
function setCalcedDday(remain){
    const remainDay = Math.ceil(remain/ 1000 / 60 / 60 / 24);
    calcedDday.innerText = `D-${remainDay}`;
}