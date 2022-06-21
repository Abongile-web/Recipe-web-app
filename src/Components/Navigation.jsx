import React from 'react'
import styled from 'styled-components'
import {FiCoffee, FiSearch} from 'react-icons/fi'

function Navigation() {
  return (
    <Nav className='Navigation'>
        <div className='Logo'>
            <FiCoffee />
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
            <FiSearch />
            <input type="text" placeholder='Search' ></input>
        </div>
        
    </Nav>
  )
}

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

export default Navigation