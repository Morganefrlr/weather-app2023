const APIKEY = '7bbfe55193372c9c417ce61c6443972f'



const apiCall = (city) =>{
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric&lang=fr`
    const image = document.querySelector('.weatherNowImg')
    fetch(URL)
    .then((res) => res.json()
    .then((data) => {
        console.log(data)
        document.querySelector('#city').innerHTML = data.name
        document.querySelector('#temp').innerHTML = data.main.temp + "°"
        document.querySelector('#wind').innerHTML = data.wind.speed + "km/h"
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('#feels').innerHTML = data.main.feels_like + "°"
        document.querySelector('#desc').innerHTML = data.weather[0].main
        

        if(data.weather[0].main === 'Clouds'){
            image.setAttribute('src', "./images/3.png")
        } else if(data.weather[0].main === 'Clear'){
            image.setAttribute('src', "./images/5.png")
        }else if(data.weather[0].main === "Snow" ){
            image.setAttribute('src', "./images/11.png")
        }else if(data.weather[0].main === "Mist" ){
            image.setAttribute('src', "./images/11.png")
        }else if(data.weather[0].main === "Rain" ){
            image.setAttribute('src', "./images/8.png")
        }else if(data.weather[0].main === "Drizzle" ){
            image.setAttribute('src', "./images/7.png")
        }
    }

    
    ))
    .catch((err) => console.log('Il y a une erreur : ' + err))

}


document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value
    apiCall(ville)
})

apiCall('Paris')
