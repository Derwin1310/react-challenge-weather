import { createContext, useState } from 'react'
const API_KEY = import.meta.env.VITE_API_KEY

export const store = createContext()

export const AppContext = ({ children }) => {
  const [data, setdata] = useState({ city: "", country: "" })
  const [weather, setWeather] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleData = ({ target }) => setdata({
    ...data,
    [target.name]: target.value.trim().toLowerCase()
  })

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${API_KEY}`

    try {
      setIsLoading(true)
      const data = await fetch(url)
      const resp = await data.json()
      setWeather([resp])
    } catch (error) {
      console.log("Error on getWeather :", error)
    } finally {
      setIsLoading(false)
    }
  }

	const initial_state = {
    data,
    isLoading,
    weather
	}

	const setState = () => {
		return {
      setdata,
      handleData,
      getWeather,
      setIsLoading
		}
	}

	const state = {
    ...initial_state,
		effects: {
			...setState()
		}
	}

	return <store.Provider value={state}>{children}</store.Provider>
}