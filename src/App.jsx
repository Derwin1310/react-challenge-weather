import { useContext } from 'react'
import { Form, WeatherInfo } from './components'
import { NotFound } from './components/NotFound'
import { AppContext, store } from './context/store'

function App() {
  // const { cityFound } = useContext(store)

  return (
    <AppContext>
      <main className="bg-secondary h-screen flex justify-center items-center px-8">
        <section className="bg-primary p-5 rounded-radius shadow-shadow flex flex-col gap-6 max-w-5xl w-full md:flex-row justify-between md:h-96">
          <Form />
          <WeatherInfo />
        </section>
      </main>
    </AppContext>
  )
}

export default App
