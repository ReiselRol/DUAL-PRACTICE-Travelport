import React, { useEffect, useState } from 'react'

export function Fetch({tiempo,gameFinished}) {
    const [dinero,setDinero] = useState()
    const [pokemon,setPokemon] = useState()
    const[pokemonIMG,setPokemonIMG] = useState()
    var dineroRedondeado = 0

    const MoneyHost = 'https://api.frankfurter.app/latest?'
    const PokemonHost = 'https://pokeapi.co/api/v2/pokemon/'
    const tiempoSegundos = tiempo[0] * 60 + tiempo[1] //el tiempo[0] son minutos, el tiempo[1] son segundos
    const amount = tiempoSegundos

    useEffect(() =>{
        fetch(MoneyHost + 'amount='+ amount + '&from=USD&to=EUR')
        .then(response => response.json())
        .then((data) => {
            dineroRedondeado = Math.floor(data.rates.EUR)
            setDinero(data.rates.EUR)
        }).then(() => {
            fetch(PokemonHost + dineroRedondeado)
            .then(response => response.json())
            .then((data) => {
                setPokemon(data.name)
                setPokemonIMG(data.sprites.front_default)
            })
        })
        return () => {
            setDinero(undefined)
            setPokemon(undefined)
            setPokemonIMG(undefined)
        }
    }, [gameFinished])

    return (
        <>
            {gameFinished && dinero && pokemon && pokemonIMG && <div className='absolute top-1/4 text-xl flex justify-center text-center z-50 bg-gradient-to-br from-gray-800 to-gray-500 border-b-2 border-t-2 border-white rounded-3xl'>Como has tardado {tiempoSegundos} segundos,<br/> contando que cada segundo es un Euro<br/>y traducido a dolares equivale a {dinero}$,<br/>eres un {pokemon} <br/><img src={pokemonIMG}/></div>}
        </>
    )
}