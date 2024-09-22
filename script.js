const apiKey="e8819e8ae04515f524475bb5d5d9f6b6"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox=document.querySelector(".search input")
const buttonBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

// async function checkWeather() {
//     const response=await fetch(apiUrl+ `&appid=${ apiKey}`)
//     const data = await response.json()
//     console.log(data);
    
// }
// checkWeather()

chackWeather=async(city)=>{
    const responce= await fetch(apiUrl+city+`&appid=${apiKey}`)
    const data= await responce.json()
    console.log(data);
   if(responce.status==404){
     document.querySelector(".error").style.display="block"
     document.querySelector(".weather").style.display="none"
   }else{

    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data. main.temp)+"°C" 
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"
 
    if(data.weather[0].main=="Clouds"){
       weatherIcon.src="/weather--app/image/clouds.png"
    }else if(data.weather[0].main=="Clear"){
     weatherIcon.src="/weather--app/image/clear.png"
    }else if(data.weather[0].main=="Rain"){
     weatherIcon.src="/weather--app/image/rain.png"
    }else if(data.weather[0]=="Drizzle"){
     weatherIcon.src="/weather--app/image/drizzle.png"
    }else if(data.weather[0]=="Mist"){
     weatherIcon.src="/weather--app/image/mist.png"
    }
 
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
     
 }


   }


  
buttonBtn.addEventListener("click",()=>{

chackWeather(searchBox.value)
})
