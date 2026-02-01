import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Prakash" age = {20} image="https://plus.unsplash.com/premium_photo-1764691305643-81bffa53e848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user="Dharaviya" age = {21} image="https://images.unsplash.com/photo-1768861020377-3fdead073d13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App