import React from 'react'
import Beer from '../components/Beer'

function Beers(props) {
    return (
        <div>
          {
            props.beers.map(beer => {
              return <Beer beer={beer}></Beer>
            })
          }
        </div>
    )
}

export default Beers