import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [pokemones, setPokemones] = useState([]) 
  const [buscar,setBuscar] = useState('')

useEffect(()=>{
  fetchPokemon()
  .then(pokemones => setPokemones(pokemones.results))
},[])

  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const json = await response.json()
    return json
  }

  return (
  <div className='container bug'>
    <div className='tituloCont'>
      <div className='titulo'>
        <img src='/titulo.png'/>
      </div>
    </div>
      <div className='buscadorCont bug'>
        <div className='buscador bug'>
            <input
            className='buscadorInput bug'
            placeholder='Buscar Pokemon'
            onChange={e => setBuscar(e.target.value)}
            defaultValue={buscar}/>
        </div>
      </div>    
      { pokemones.filter(pokemon => pokemon.name.toLowerCase().includes(buscar.toLowerCase())).map((pokemon,i) => {
        return (
          <div className='cardCont bug'>
            <div className='cardImagen bug'>
              <img
              src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}
              />
            </div>
              <button 
              className='cardButton bug'
              key={i}
              type='submit'
              >
                <h4 className='cardName bug'>{pokemon.name}</h4>
              </button>
          </div>
          ); 
        })}
  </div>
  )
}

export default App
