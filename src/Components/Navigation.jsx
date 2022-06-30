import React from 'react'
import styled from 'styled-components'
import {FiCoffee, FiSearch} from 'react-icons/fi'
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <Nav className='Navigation'>
        <div className='Logo'>
            <FiCoffee />
            <NavLink to={'/'}>Foodie</NavLink>
        </div>

        <ul>
            <NavLink to={'/pasta'}>Pasta</NavLink>
            <NavLink to={'/pizza'}>Pizza</NavLink>
            <NavLink to={'/salads'}>Salads</NavLink>
            <NavLink to={'/dessert'}>Dessert</NavLink>
            <NavLink to={'/fruit'}>Fruit</NavLink>
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

        a {
            font-size: 24px;
            text-decoration: none;
            color: white;
        }
    }

    ul {
        display: flex;
        align-items: center;

        a {
            margin: 1rem;
            list-style: none;
            cursor: pointer;
            font-weight: bolder;
            font-size: 20px;
            text-decoration: none;
            color: white;
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