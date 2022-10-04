import React from 'react'
import Calculadora from './components/Calculadora';

const App = () => {
  return (
    <div className='container text-center border border-dark'>
      <h1>Calculadora - PWA</h1>
      <hr></hr>

      <Calculadora />
    </div>
  )
}

export default App;