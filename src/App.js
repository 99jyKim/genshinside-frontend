import React, { useEffect, useState } from 'react'

import './App.css'

const App = () => {
  const [message, setMessage] = useState('서버 접속 중...')

  const fetchData = async () => {
    try {
      //const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/message'
      //const apiUrl = process.env.REACT_APP_API_URL
      const apiUrl = 'http://localhost:8080/api/message'

      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      setMessage(data.status);
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Backend로부터 받은 메시지</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
