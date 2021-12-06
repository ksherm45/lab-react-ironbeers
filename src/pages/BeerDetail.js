import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


function BeerDetail() {
    const params = useParams()
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        (async() => {
            const data = await fetch('https://ih-beers-api2.herokuapp.com/beers/' + params.id)
            const response = await data.json()
            setBeer(response)
        })()
    })

    if(!beer) return null

    return (
        <div>
            <img src={beer.image_url} alt="" height="200"/>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
        </div>
    )
}

export default BeerDetail