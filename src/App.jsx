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

  const cambiarState = (e) =>{
    (e.target.value)
  }

  console.log(buscar)

  return (
  <div className='container'>
      <div className='buscadorCont'>
        <div className='buscador'>
            <input
            className='buscadorInput'
            placeholder='Buscar Pokemon'
            onChange={cambiarState}
            defaultValue={buscar}/>
        </div>
      </div>
             
      {pokemones.filter(pokemon => pokemon.name.toLowerCase()).map((pokemon,i) => {
        return (
          <div className='cardCont'>
            <div className='cardImagen'>
              <img
              src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}
              />
            </div>
              <button 
              className='cardButton'
              key={i}
              type='submit'
              >
                <h4 className='cardName'>{pokemon.name}</h4>
              </button>
          </div>
          ); 
        })}
  </div>
  )
}

export default App
