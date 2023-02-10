import { useContext, useState } from "react"
import { Spinner, NotFound } from "./"
import { store } from "../context/store"

export const WeatherInfo = () => {
  const { weather, isLoading } = useContext(store)
  const [units, setUnits] = useState(false)

  const celsius = (temp) => parseInt(temp - 273.15)
  const fahrenheit = (temp) => parseInt(celsius(temp) * 9/5 + 32)

  const toggleUnits = () => setUnits(!units)

  const handleTemp = (temp) => units ? `${fahrenheit(temp)}F` : `${celsius(temp)}C`

  if (isLoading) return <Spinner />
  if(weather[0]?.message) return <NotFound />

  return (
    weather?.map(({ id, name, main: { temp, temp_min, temp_max, humidity }, weather }) => (
      <section key={id} className="bg-primary text-light shadow-shadow rounded-radius px-8 py-4 flex flex-col gap-4 md:w-1/2 justify-between">
        <div>
          <h2 className="text-title">
            {handleTemp(temp)} °
            <span className="text-big"> {name}</span>
          </h2>
          <p className="text-big">{weather[0].description}</p>
        </div>
        <hr className="text-fourth-normal" />
        <p>min {handleTemp(temp_min)} ° / max {handleTemp(temp_max)} °</p>
        <hr className="text-fourth-normal" />
        <p>humidity: {humidity}%</p>
        <hr className="text-fourth-normal" />
        <button onClick={toggleUnits} className="bg-tertiary-normal hover:bg-tertiary-hover rounded-radius shadow-shadow p-2 active:scale-95 duration-100 w-max">
          See in { units ? "celsius" : "fahrenheit"}
        </button>
      </section>
    ))
  )
}
