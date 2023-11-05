import { useState } from 'react'

import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'
import { Map } from './Components/Map'

function App() {

  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()
  // console.log(weather)
  const submitCity = () => {
    setPlace(input)
    setInput('')
  }


  return (
    <div className='w-full h-screen text-white px-2'>
      <nav className='w-full py-4  px-8 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3'>Weather App</h1>
        <div className=' bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCity()
            }
          }} type="text " placeholder='Search City' className=' focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 mt-4 px-[1%] items-center justify-center   '>
        <WeatherCard place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatIndex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className='flex justify-center gap-14 py-8 flex-wrap w-[64%] mx-2'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              )
            })
          }
          <div className=' flex w-[40%] '>
            <Map city={thisLocation} />
          </div>
        </div>

      </main>
      <div className="tagLine">
        <p id="madeByPranav">Made by Pranav Singh</p>
      </div>
    </div>
  )
}

export default App
