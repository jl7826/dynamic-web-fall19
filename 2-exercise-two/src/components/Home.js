import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherIcons from './WeatherIcons'
import "../App.css"
import PageWrapper from './PageWrapper'

const apiKey = 'a1dbbed242b2bdc64304f126418870b3'

export default function Home(props) {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState({})
	const [weatherType, setWeatherType] = useState('')
	const [cloudy, setCloudy] = useState()

	function apiCallback(response){
		setWeather(response.data)
	}

	useEffect(()=>{
		const urlParams = new URLSearchParams(props.location.search)
		const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London'

		setCity(cityParam)

		const query = `http://api.openweathermap.org/data/2.5/weather?q=${cityParam}&appid=${apiKey}`
		axios.get(query).then(response => apiCallback(response))
	}, [])

	useEffect(() => {
		let getWeatherType = weather.weather ? weather.weather[0].main : ''
		let getCloudy = weather.clouds ? weather.clouds.all : 0;
		// //When I get blocked
		// let getWeatherType = "Cloudy"
		// let getCloudy = 60

		setWeatherType(getWeatherType)
		setCloudy(getCloudy)
	}, [weather])

	return (
		<div className="appContainer">
			<div className="navBar">
				<a className="link" href="/?city=Seoul">Seoul</a>
				<a className="link" href="/?city=New York">New York</a>
				<a className="link" href="/?city=London">London</a>
				<a className="link" href="/?city=Beijing">Beijing</a>
			</div>

			<PageWrapper cloudy={cloudy}>
				<div className="cityName">{city}</div>

				<div className="infoCardContainer">
					<div className="infoCard">
						<div>Temperature: {weather.main && weather.main.temp}</div>
					</div>
					<div className="infoCard">High Temperature: {weather.main && weather.main.temp_max}</div>
					<div className="infoCard">Low Temperature: {weather.main && weather.main.temp_min}</div>
					<div className="infoCard">Humidity: {weather.main && weather.main.humidity}</div>
					<div className="infoCard">Wind Speed: {weather.wind && weather.wind.speed}</div>
					<div className="infoCard">Clouds: {weather.clouds && weather.clouds.all}</div>
					<div className="infoCard">Pressure: {weather.main && weather.main.pressure}</div>
					<div className={"infoCard withIcon"}>
						<WeatherIcons weatherType={weatherType} />
						<div>{weather.weather && weather.weather.description}</div>
					</div>

					{/* When I get blocked */}
					{/* <div className="infoCard">
						<div>Temperature: {53}</div>
					</div>
					<div className="infoCard">High Temperature: {60}</div>
					<div className="infoCard">Low Temperature: {50}</div>
					<div className="infoCard">Humidity: {100}</div>
					<div className="infoCard">Wind Speed: {12}</div>
					<div className="infoCard">Clouds: {cloudy}</div>
					<div className="infoCard">Pressure: {1000}</div>
					<div className={"infoCard withIcon"}>
						<WeatherIcons weatherType='Rain' />
						<div>Rain</div>
					</div> */}
				</div>
			</PageWrapper>
		</div>
	)
}

/*
Submit the link to the Github repo AND a screenshot of your weather app to James at ja155@nyu.edu
*/

/*

OPEN WEATHER JSON FORMAT
CURRENT WEATHER BY CITY NAME

{
	"coord": {
		"lon": -0.13,
		"lat": 51.51
	},
	"weather": [{
		"id": 300,
		"main": "Drizzle",
		"description": "light intensity drizzle",
		"icon": "09d"
	}],
	"base": "stations",
	"main": {
		"temp": 280.32,
		"pressure": 1012,
		"humidity": 81,
		"temp_min": 279.15,
		"temp_max": 281.15
	},
	"visibility": 10000,
	"wind": {
		"speed": 4.1,
		"deg": 80
	},
	"clouds": {
		"all": 90
	},
	"dt": 1485789600,
	"sys": {
		"type": 1,
		"id": 5091,
		"message": 0.0103,
		"country": "GB",
		"sunrise": 1485762037,
		"sunset": 1485794875
	},
	"id": 2643743,
	"name": "London",
	"cod": 200
}
*/