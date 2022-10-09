import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [diff, setDiff] = useState(0)

  useEffect(() => {
    const event = new Date('01/25/2023').getTime()
    const interval = setInterval(() => {
      const date = new Date().getTime()
      setDiff(event - date)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='background-container' />
      <div className='App'>
        <h1 className='countdown-title'>DISNEY WORLD</h1>
        <div className='countdown-container'>
          <p className='section-container'>
            <span className='section-number'>
              {Math.floor(diff / (1000 * 60 * 60 * 24))}
            </span>
            <span className='section-text'>
              days
            </span>
          </p>
          <p className='section-container'>
            <span className='section-number'>
              {Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}
            </span>
            <span className='section-text'>
              hour
            </span>
          </p>
          <p className='section-container'>
            <span className='section-number'>
              {Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))}
            </span>
            <span className='section-text'>
              minutes
            </span>
          </p>
          <p className='section-container'>
            <span className='section-number'>
              {Math.floor((diff % (1000 * 60)) / 1000)}
            </span>
            <span className='section-text'>
              seconds
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
