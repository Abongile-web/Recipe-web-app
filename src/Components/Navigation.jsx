import React from 'react'
import styled from 'styled-components'

function Navigation() {
  return (
    <div className='Navigation'>
        <div className='Logo'>
            <i></i>
            <h1>Foodie</h1>
        </div>

        <ul>
            <li>Pasta</li>
            <li>Pizza</li>
            <li>Salads</li>
            <li>Dessert</li>
            <li>Fruit</li>
        </ul>

        <div>
            <i></i>
            <input type="text" placeholder='Search' ></input>
        </div>
        
    </div>
  )
}

const Nav = styled.div `

`

export default Navigation