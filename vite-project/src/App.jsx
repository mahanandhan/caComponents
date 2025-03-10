import React from 'react'
import ServiceCard from './components/service/ServiceCard'
import "./components/service/ServiceCard.css"
const App = () => {
  const data = [{
    "id": "1",
    "title": "web service",
    "dis": "good for creating website projects"
  }, {
    "id": "2",
    "title": "water service",
    "dis": "this service provides water"
  }]
  return (
    <div>
      {data.map((item, index) => {
        return <ServiceCard key={index} title={item.title} dis={item.dis}/>
      })}
    </div>
  )
}

export default App
