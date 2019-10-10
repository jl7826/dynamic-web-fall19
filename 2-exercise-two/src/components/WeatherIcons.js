import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella, faCloud, faSnowflake, faSun, faBolt } from '@fortawesome/free-solid-svg-icons'

export default function WeatherIcons({ weatherType }) {
    switch (weatherType) {
        case "Rain":
            return (<FontAwesomeIcon icon={faUmbrella} />)
        case "Clouds":
            return (<FontAwesomeIcon icon={faCloud} />)
        case "Snow":
            return (<FontAwesomeIcon icon={faSnowflake} />)
        case "Clear":
            return (<FontAwesomeIcon icon={faSun} />)
        case "Thunderstorm":
            return (<FontAwesomeIcon icon={faBolt} />)
        default:
            return (<div>{weatherType}</div>)
    }
}