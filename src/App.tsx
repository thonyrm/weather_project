import styles from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/Form/Form"
import Spinner from "./components/Spinner/Spinner"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hook/useWeather"

function App() {
  const {weather, loading, notFound, fetchWeather, hasWeatherData} = useWeather()
  return (
    <>
      <h1 className= {styles.title}>Weather project</h1>
      <div className= {styles.container} >
        <Form fetchWeather ={fetchWeather} />
        {loading && <Spinner/> }
        {hasWeatherData && <WeatherDetail weather= {weather} /> }
        {notFound && <Alert>Cuidad no encontrada</Alert> }

      </div>
    </>
  )
}

export default App
