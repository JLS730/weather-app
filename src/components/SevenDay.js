/* eslint-disable no-unreachable */
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

import thunderImage from '../images/weather-svgs/thunder.svg'
import cloudImage from '../images/weather-svgs/cloudy.svg'
import clearImage from '../images/weather-svgs/day.svg'
import rainImage from '../images/weather-svgs/rainy-4.svg'
import snowImage from '../images/weather-svgs/snowy-1.svg'

const SevenDay = ({ data }) => {
    const [week, setWeek] = useState(undefined)
    const [weekDays, setWeekDays] = useState(undefined)

    const weekWeatherSectionRef = useRef(null)

    useEffect(() => {
        gsap.from(weekWeatherSectionRef.current, { delay: 1.1, y: 200, duration: 1, opacity: 0 })

        getWeekArray(data)
        getWeekDayArray(data)
    }, [data])

    function getWeekArray(data) {
        let array = []

        for(let i = 0; i < 6; i++) {
            array.push(data.daily[i])
        } 
        
        setWeek(array.slice(1))
    }

    function getWeekDayArray(data) {
        switch(new Date().getDay()) {
            case 0:
                setWeekDays(['Mon', 'Tues', 'Wed', 'Thur', 'Fri'])
                break
            case 1:
                setWeekDays(['Tues', 'Wed', 'Thur', 'Fri', 'Sat'])
                break
            case 2:
                setWeekDays(['Wed', 'Thur', 'Fri', 'Sat', 'Sun'])
                break
            case 3:
                setWeekDays(['Thur', 'Fri', 'Sat', 'Sun', 'Mon'])
                break
            case 4:
                setWeekDays(['Fri', 'Sat', 'Sun', 'Mon', 'Tues'])
                break
            case 5:
                setWeekDays(['Sat', 'Sun', 'Mon', 'Tues', 'Wed'])
                break
            case 6:
                setWeekDays(['Sun', 'Mon', 'Tues', 'Wed', 'Thur'])
                break
            default:
                return
        }
    }

    function getSvg(week) {
        switch(week.weather[0].main) {
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

    return (
        <section className="seven-day-section">
            <div className="seven-day-container" ref={weekWeatherSectionRef}>
                {(week !== undefined && weekDays !== undefined) && week.map( (forecast, x) => {
                    return (
                        <div className="weekday-container" key={x}>
                            <h2 className="weekday">{weekDays[x]}</h2>
                            <img src={getSvg(forecast, x)} alt={forecast.weather[0].main} className='weekday-image'/>
                            <div className="weekday-temp-container">
                                <h3 className="weekday-celsius">{getCelcius(forecast.temp.day)}&deg; C</h3>
                                <h3 className="weekday-fahrenheit">{getFahrenheit(forecast.temp.day)}&deg; F</h3>
                            </div>
                        </div>
                    )
                } )}
            </div>
        </section>
    )
}

export default SevenDay