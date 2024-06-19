import { useState } from 'react'
import './App.css'
import Aside from './components/Aside'
import { Main } from './components/Main'

function App() {

  return (
    <div className='app'>
      <Aside />
      <Main />
    </div>
  )
}

export default App
