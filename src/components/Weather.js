import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Current from './Current'

const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState(undefined)
    const [weekWeather, setWeekWeather] = useState(undefined)
    const [usWorld, setUsWorld] = useState(undefined)

    const usWorldRef = useRef(null)
    const countryInputRef = useRef(null)
    const cityInputRef = useRef(null)
    const stateInputRef = useRef(null)
    const stateSelectRef = useRef(null)

    useEffect(() => {
        if(currentWeather === undefined) {
            return
        }

        const apiKey = 'ae0aad49efd890348b878da1481b397c'
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&&appid=${apiKey}`

        axios.post(url)
        .then((response) => setWeekWeather(response.data))
        .catch((error) => console.log(error))

    }, [currentWeather])

    function handleWeatherFetch() {
        if(usWorld === 'world') {
            const apiKey = 'ae0aad49efd890348b878da1481b397c'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputRef.current.value},${countryInputRef.current.value}&appid=${apiKey}`

            axios.post(url)
            .then((response) => setCurrentWeather(response.data))
            .catch((error) => console.log(error))
        } else {
            const apiKey = 'ae0aad49efd890348b878da1481b397c'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputRef.current.value},${stateSelectRef.current.value},us&appid=${apiKey}`

            axios.post(url)
            .then((response) => setCurrentWeather(response.data))
            .catch((error) => console.log(error))
        }
    }

    function onChange(e) {
        if(e.target.value === 'world') {
            setUsWorld('world')
            stateInputRef.current.style.visibility = 'hidden'
            countryInputRef.current.disabled = false
        } else {
            setUsWorld('us')
            stateInputRef.current.style.visibility = 'visible'
            countryInputRef.current.disabled = true
        }
    }

    return (
        <React.Fragment>
            <nav className="navigation-bar">
                <form className='input-fields'>
                    <div className='us-world-container'>
                        <select name="us-world" className='us-world dropdown' ref={usWorldRef} onChange={e => onChange(e)}>
                            <option value="us">United States</option>
                            <option value="world">World</option>
                        </select>
                    </div>

                    <div className="city-container input-containers">
                        <label htmlFor="city">City: </label>
                        <input type="text" name='city' ref={cityInputRef}/>
                    </div>
                    
                    <div className="country-container input-containers">
                        <label htmlFor="country">Country: </label>
                        <input type="text" name='country' disabled='disabled' className='country' ref={countryInputRef}/>
                    </div>

                    <div className="state-container input-containers" ref={stateInputRef}>
                        <label htmlFor="state">State: </label>
                        <select name="state" className='state dropdown' ref={stateSelectRef}>
                            <option value="al">Alabama</option>
                            <option value="ak">Alaska</option>
                            <option value="az">Arizona</option>
                            <option value="ar">Arkansas</option>
                            <option value="ca">California</option>
                            <option value="co">Colorado</option>
                            <option value="ct">Connecticut</option>
                            <option value="de">Delaware</option>
                            <option value="fl">Florida</option>
                            <option value="ga">Georgia</option>
                            <option value="hi">Hawaii</option>
                            <option value="id">Idaho</option>
                            <option value="il">Illinois</option>
                            <option value="in">Indiana</option>
                            <option value="ia">Iowa</option>
                            <option value="ks">Kansas</option>
                            <option value="ky">Kentucky</option>
                            <option value="la">Louisiana</option>
                            <option value="me">Maine</option>
                            <option value="md">Maryland</option>
                            <option value="ma">Massachusetts</option>
                            <option value="mi">Michagan</option>
                            <option value="mn">Minnesota</option>
                            <option value="ms">Mississippi</option>
                            <option value="mo">Misssouri</option>
                            <option value="mt">Montana</option>
                            <option value="ne">Nebraska</option>
                            <option value="nv">Nevada</option>
                            <option value="nh">New Hampshire</option>
                            <option value="nj">New Jersey</option>
                            <option value="nm">New Mexico</option>
                            <option value="ny">New York</option>
                            <option value="nc">North Carolina</option>
                            <option value="nd">North Dakota</option>
                            <option value="oh">Ohio</option>
                            <option value="ok">Oklahoma</option>
                            <option value="or">Oregon</option>
                            <option value="pa">Pennsylvania</option>
                            <option value="ri">Rhode Island</option>
                            <option value="sc">South Carolina</option>
                            <option value="sd">South Dakota</option>
                            <option value="tn">Tennessee</option>
                            <option value="tx">Texas</option>
                            <option value="ut">Utah</option>
                            <option value="vt">Vermont</option>
                            <option value="va">Virginia</option>
                            <option value="wa">Washington</option>
                            <option value="wv">West Virginia</option>
                            <option value="wi">Wisconsin</option>
                            <option value="wy">Wyoming</option>
                        </select>
                    </div>

                    <div className='search-container'>
                        <button type='button' className='search' onClick={handleWeatherFetch}>Search</button>
                    </div>
                </form>
            </nav>
            {weekWeather !== undefined && <Current current={currentWeather} week={weekWeather} lon={currentWeather.coord.lon} lat={currentWeather.coord.lat}/>}
        </React.Fragment>
    )
}

export default Weather