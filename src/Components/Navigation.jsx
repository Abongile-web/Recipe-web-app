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

        <div className='search'>
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
    padding: 0.5rem 2rem;
    background-color: #FF0022;
    color: white;

    .Logo {
        display: flex;
        align-items: flex-start;

        svg {
            font-size: 24px;
            margin: 0 0.2rem;
        }

        h1 {
            font-size: 24px;
        }
    }

    ul {
        display: flex;
        align-items: center;

        li {
            margin: 1rem;
            list-style: none;
            cursor: pointer;
            font-weight: bolder;
            font-size: 20px;
        }
    }

    .search {
        display: flex;
        align-items: center;
        background-color: white;
        padding: 0.3rem;
        border-radius: 10px;

        svg {
            color: black;
            font-size: 20px;
            padding-right: 0.2rem;
        }

        input {
            border: none;
            outline: none;
        }
    }
`;

export default Navigation