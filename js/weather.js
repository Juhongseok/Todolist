const key = "066d1150ed19478fb2eb01ab62cb197b";
function onGeoOk(getCurrentPosition){
    const lat = getCurrentPosition.coords.latitude;
    const lng = getCurrentPosition.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            document.querySelector("#where").innerText = data.name;
            document.querySelector("#temperature").innerText = `${Math.round(data.main.temp)}`;
            document.querySelector("#weather").innerText = `${data.weather[0].main}`;
        }) 
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);