import React from 'react'
import {Link} from 'react-router-dom'

function Beer(props) {
    const {beer} = props

    return (
        <div>
            <img src={beer.image_url} alt="" height="200"/>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={"/beers/" + beer._id}>Check Details</Link>
        </div>
    )
}

export default Beer