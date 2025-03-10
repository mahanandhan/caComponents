import React from 'react'
import ServiceCard from './components/service/ServiceCard'
import "./components/service/ServiceCard.css"
const App = () => {
  const data = [{
    "id": "1",
    "title": "web service",
    "dis": "good for creating website projects using frontend and backend in frontend using basics: html css and js and react is advance and backend node.js express.js mongodb as database"
  }, {
    "id": "2",
    "title": "water service",
    "dis": "this service provides water like giving water connections like drinking water and non-drinking water which helps people."
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
