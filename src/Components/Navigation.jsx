import React, { useState } from 'react'
import styled from 'styled-components'
import {FiCoffee, FiSearch} from 'react-icons/fi'
import {NavLink, useNavigate} from 'react-router-dom';

function Navigation() {

    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const search = (e)=> {
        e.preventDefault();
        navigate('/searched/' + input)
    }


  return (
    <Nav className='Navigation'>
        <div className='Logo'>
            <FiCoffee />
            <NavLink to={'Recipe-web-app/'}>Foodie</NavLink>
        </div>

        <ul>
            <NavLink to={'/pasta'}>Pasta</NavLink>
            <NavLink to={'/pizza'}>Pizza</NavLink>
            <NavLink to={'/salads'}>Salads</NavLink>
            <NavLink to={'/dessert'}>Dessert</NavLink>
            <NavLink to={'/fruit'}>Fruit</NavLink>
        </ul>

        <div className='search'>
            <form onSubmit={search}>
                <FiSearch />
                <input type="text" placeholder='Search' onChange={(e)=>{setInput(e.target.value)}} value={input} ></input>
            </form>
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
    min-height: 5vh;
    width: 100vw;

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
        form {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 0.3rem;
            border-radius: 10px;

        svg {
            color: black;
            font-size: 20px;
            padding-right: 0.2rem;
            padding: 3px;
        }

        input {
            border: none;
            outline: none;
        }
        }
    }

    @media screen and (max-width: 768px){
        padding: 0.5rem 0.5rem;

        ul {
            display: none;
        }

        .search {
        form {
            padding: 0.2rem;

        input {
            width: 150px;
        }
        }
    }
        
    }
`;

export default Navigation