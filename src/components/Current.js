/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import * as tomtom from '@tomtom-international/web-sdk-maps'

import SevenDay from './SevenDay'

import thunderImage from '../images/weather-svgs/thunder.svg'
import cloudImage from '../images/weather-svgs/cloudy.svg'
import clearImage from '../images/weather-svgs/day.svg'
import rainImage from '../images/weather-svgs/rainy-4.svg'
import snowImage from '../images/weather-svgs/snowy-1.svg'

const Current = ({ current, week, lon, lat }) => {
    const [day, setDay] = useState(undefined)
    const [map, setMap] = useState({})

    const currentWeatherSectionref = useRef(null)
    const extraWeatherSectionref = useRef(null)
    const weekWeatherSectionref = useRef(null)
    const mapContainerRef = useRef(null)

    useEffect(() => {
        gsap.from(currentWeatherSectionref.current, { delay: .5, y: 200, duration: 1, opacity: 0 })
        gsap.from(extraWeatherSectionref.current, { delay: .8, y: 200, duration: 1, opacity: 0 })
        gsap.from(weekWeatherSectionref.current, { delay: 1.1, y: 200, duration: 1, opacity: 0 })

        clearMap(mapContainerRef.current)
        setDay(getDay())
        getMap()
    }, [current])

    function getDay() {
        switch(new Date().getDay()) {
            case 0:
                return 'Sunday'
                break
            case 1:
                return 'Monday'
                break
            case 2:
                return 'Tuesday'
                break
            case 3:
                return 'Wednesday'
                break
            case 4:
                return 'Thursday'
                break
            case 5:
                return 'Friday'
                break
            case 6:
                return 'Saturday'
                break
            default:
                return
        }
    }

    function getSvg() {
        switch(current.weather[0].main) {
            case 'Haze':
            case 'Clouds' :
                return cloudImage
                break
            case 'Clear' :
                return clearImage
                break
            case 'Rain' :
                return rainImage
                break
            case 'Snow' :
                return snowImage
                break
            default:
                return thunderImage
        }
    }

    function getCelcius(temperature) {
        return (temperature - 273.15).toFixed(2)
    }

    function getFahrenheit(temperature) {
        return ((temperature - 273.15) * 9/5 +32).toFixed(1)
    }

    function getMap() {
        let map = tomtom.map({
            key: 'QFuH9GAzs8lu80rEHhmPm0ShlbWQkgIv',
            container: mapContainerRef.current,
            center: {lat: lat, lng: lon}, 
            zoom: 12
        });

        setMap(map)
    }

    function clearMap(parent) {
        while(parent.firstChild) {
            if(parent === undefined) {
                return
            }

            parent.removeChild(parent.firstChild)
        }
    }

    return (
        <React.Fragment>
            <main className='current-weather-section'>
                <div className="current-weather-container" ref={currentWeatherSectionref}>
                    <h2 className="current-weather-location">{current.name}, {current.sys.country}</h2>
                    <div className="weather">
                        <div className="weather-image">
                            <img src={getSvg()} alt="" />
                        </div>
                        <div className="weather-info">
                            <div className="day-container">
                                <h2>{day}</h2>
                                <h3>{current.weather[0].main}</h3>
                            </div>
                            <div className="temp-container">
                                <h4>{getCelcius(current.main.temp)}&deg; C</h4>
                                <h4>{getFahrenheit(current.main.temp)}&deg; F</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="extra-weather-container" ref={extraWeatherSectionref}>
                    <div className="weather-map-container" ref={mapContainerRef} style={{ width: '650px', height: '350px' }}></div>
                </div>
            </main>
            <SevenDay data={week}/>
        </React.Fragment>
    )
}

export default Current