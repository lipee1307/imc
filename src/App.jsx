import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <div className="imc-container">
        <div className="imc-card">
          <h1>Calculadora de IMC</h1>
          <p>Descubra seu índice de Massa Corporal</p>
      

        <div className="imc-form">
          <input 
            type="number" 
            name='peso'
            placeholder='Peso Ex: 70'
          />

          <input 
            type="number" 
            name='altura' 
            placeholder='Altura Ex: 1.75'
          />

          <button>Calcular</button>

          <button>Limpar</button>


        </div> {/* imc-form */}

          <div className="result-card">
            <h2 className='valor-result'>26</h2>
            <small className='resposta-result'>Peso Normal</small>
          </div>

        </div> {/* imc-card */}
      </div> {/* imc-container */}
    </>
  )
}
