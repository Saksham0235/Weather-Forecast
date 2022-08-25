
const fetchData = async ()=>{
    const city  = document.getElementById('city').value;
    console.log(city)
    const key = 'UPL4BVUYZWWHJ7GFQYAPFN5E8';
    let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`);
    data = await data.json();
    console.log(data)
    document.getElementById('city-name').innerText=`Weather in ${city}`;
    document.getElementById('city-weather').innerText = data.currentConditions.conditions;
    document.getElementById('city-humidity').innerText = 'humidity: '+data.currentConditions.humidity;
    document.getElementById('city-wind').innerText = 'wind speed: '+data.currentConditions.windspeed + "km/h";
    document.getElementById('city-temp').innerText = data.currentConditions.temp+'°F';
    return data;

}