import { useContext } from "react"
import { store } from "../context/store"

const contryOptions = [
  {country: "Select a country", value: ""},
  {country: "Colombia", value: "COL"},
  {country: "Argentina", value: "ARG"},
  {country: "Perú", value: "PER"},
  {country: "Chile", value: "CHI"},
  {country: "United States", value: "USA"},
  {country: "Spain", value: "SPA"},
  {country: "Germany", value: "GER"},
  {country: "New Zeland", value: "NZD"},
  {country: "Canada", value: "CAN"},
]

export const Form = () => {
  const { data, effects: { handleData, getWeather } } = useContext(store)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await getWeather()
    } catch (error) {
      console.log("Error on handleSubmit :", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:justify-between shadow-shadow rounded-radius py-4 px-8 md:w-1/2">
      <div className="flex flex-col gap-4 md:gap-8">
        <label htmlFor="city" className="label">
          <input
            type="text"
            placeholder="Search a city..."
            id="city"
            name="city"
            className="input"
            onChange={handleData}
            value={data["name"]}
          />
        </label>
        <label htmlFor="country" className="label">
          <select
            id="country"
            name="country"
            className="input"
            onChange={handleData}
            value={data["name"]}
          >
            {contryOptions.map(({ country, value }) => <option key={country} value={value}>{country}</option>)}
          </select>
        </label>
      </div>
      <button className="bg-tertiary-normal text-light text-big rounded-radius shadow-shadow hover:bg-tertiary-hover p-2 active:scale-95 duration-100">
        Check weather
      </button>
    </form>
  )
}
