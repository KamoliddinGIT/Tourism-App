const appKey = '56b5b09d7a15e7b34b148b683999956d',
cityName = document.querySelector('.input'),
viewBtn = document.querySelector('.btn'),
temp=document.querySelector('.temp'),
temp2=document.querySelector('.temp2'),
image2=document.querySelector('.image2'),
title = document.querySelector('.titlecity'),
c = document.querySelector('.c'),
air = document.querySelector('.air'),
pressure = document.querySelector('.pressure'),
homeabout = document.querySelector('.home-about'),
loader = document.querySelector('.loader'),
map = document.querySelector('#map'),
errorMessage = document.querySelector('.text-error')


viewBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${appKey}`)
  .then(response => response.json())  
  .then(json => {
    if(!json.name) {

    }
    else {
      loader.style.cssText = 'display: none;'
    }
    console.log(json);
    // c.innerHTML = `${json.main.temp} °`
    json.weather.map((item)=>{
      air.innerHTML = item.main
    })
    // pressure.innerHTML = `pressure: ${json.main.pressure}`
    title.innerHTML = json.name
    temp.innerHTML=`${json.main.temp_min}° / ${json.main.temp_max}°`

  })
  .catch(err => {
    errorMessage.style.cssText = 'display: none;'

  })
  
fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${cityName.value}`, options)
.then(response => response.json())
.then(response => {
  if(!response.thumbnail) {

  }
  else {
    loader.style.cssText = 'display: none;'
  }

  response.queryExpansions.map((item)=>{
    image2.src=item.thumbnail.thumbnailUrl
    })
 


    })
.catch(err => console.error(err));
homeabout.style.cssText = 'display: flex;'
  errorMessage.style.cssText = 'display: none;'
});

// image api

const img= document.querySelector('#img')
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4978e1504dmshe1ba8ddda8441c8p10bfadjsn91ac03a01748',
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
  }
};
