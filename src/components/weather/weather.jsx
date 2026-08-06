import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

export function Weather(){

    const api_key = "464db852a19c1910a220f81755a89819";
    const [city, setCity] = useState('London');
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    const [weatherObj, setWeatherObj] = useState({weather:[{description:''}], main:{temp:0}, name:''});
    const [today] = useState(new Date());

    function LoadWeather(){
        axios.get(api_url)
        .then(response=>{
             setWeatherObj(response.data);
        })
    }
    useEffect(()=>{
        LoadWeather();
    })

    return(
        <div className="container-fluid p-4">
            <div className="card">
                <div className="card-header">
                    <div className="fw-bold fs-1">{weatherObj.name}</div>
                    <div>{moment(today).format('DD dddd, MMMM YYYY')}</div>
                </div>
                <div className="card-body">
                    <div className="fs-1 fw-bold">{weatherObj.main.temp.toFixed(0)}&deg;C</div>
                </div>
                <div className="card-footer">
                    <div className="fs-4 fw-bold">{weatherObj.weather[0].description.toUpperCase()}</div>
                </div>
            </div>
        </div>
    )
}