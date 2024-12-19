//Data
//variable to store data
let data;
const input=document.getElementById('inputbox');
const country=document.getElementById('countryName');
const state=document.getElementById('stateName');
const city=document.getElementById('CityName');
const humidity=document.getElementById('humidity');
const Windowspeed=document.getElementById('windowspeed');
const temperture=document.getElementById('temperture');
const logoimage=document.getElementById('logoimage');
const wheatherstatus=document.getElementById('wheatherstatus');
//acess api  http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
const getData=async(event)=>{
    event.preventDefault();
    if(!input.value){
        alert('Please enter city Name');
    }
    const cityname=input.value;
    const fetchdata= await fetch(`https://api.weatherapi.com/v1/current.json?key=edde4d62b6bc4bd68a163208241912&q=${cityname}`);
    let orgdata=await fetchdata.json();
    let data=orgdata;
    console.log(data);
    country.innerHTML=data.location.country;
    state.innerHTML=data.location.region;
    city.innerHTML=data.location.name;
    humidity.innerHTML=data.current.humidity;
    Windowspeed.innerHTML=data.current.wind_kph;
    temperture.innerHTML=data.current. temp_c;
    logoimage.src=data.current.condition.icon;
    wheatherstatus.innerHTML=data.current.condition.text;
};