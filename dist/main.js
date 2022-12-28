(()=>{"use strict";const e=document.querySelector(".cityName"),t=document.querySelector(".temp"),o=document.querySelector(".feelsLike"),n=document.querySelector(".searchCity"),c=document.querySelector(".weather"),r=document.querySelector(".weatherIcon"),a=document.querySelector("time"),s=document.querySelector(".pressure"),l=document.querySelector(".windSpeed"),i=document.querySelector(".maxToday"),u=document.querySelector(".minToday"),m=function(e,t){e>=90?t.style.color="var(--superhot)":e>80?t.style.color="var(--prettyhot)":e>70?t.style.color="var(--warm)":e>50?t.style.color="var(--temperate)":e>30?t.style.color="var(--cool)":e>20?t.style.color="var(--prettycold)":e<=20&&(t.style.color="var(--supercold)")},y=async function(n){const y=await async function(e){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=20f7632ffc2c022654e4093c6947b4f4&units=imperial`,{mode:"cors"});return await t.json()}catch(e){console.error}}(n);e.textContent=y.name,t.textContent=y.main.temp+" °F,",o.textContent="feels like "+y.main.feels_like+" °F",c.textContent=y.weather[0].main;const d=new Date(Date.now()+18e6+1e3*y.timezone);a.textContent=d.toLocaleTimeString(),s.textContent=y.main.pressure+" hPa",l.textContent=y.wind.speed+" mph",i.textContent=y.main.temp_max,u.textContent=y.main.temp_min,console.log(y),function(e){switch(e.toLowerCase()){case"clouds":r.src="icons/cloud.svg";break;case"clear":r.src="icons/sunnyclear.svg";break;case"mist":case"fog":r.src="icons/fog.svg";break;case"rain":r.src="icons/rain.svg";break;case"snow":r.src="icons/snow.svg"}}(c.textContent),m(parseInt(y.main.temp),t),m(parseInt(y.main.feels_like),o)};y("Augusta, US"),n.addEventListener("keyup",(async()=>{if("Enter"===event.key&&n.value){try{await y(n.value?n.value:"Augusta, US").catch((n=>{e.textContent="City does not exist!",t.textContent="",o.textContent="",c.textContent=""}))}catch(e){console.log(e)}n.value=""}}))})();