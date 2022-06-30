import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom'


function Food() {

  const [food, setFood] = useState([]);
  let params = useParams();

  const getFood = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    
    const recipe = await data.json()
    setFood(recipe.result);
  }

  useEffect(() => {
    // getFood(params.type)
    console.log(params.type)
  }, [params.type])


  return (
    <div>Food</div>
  )
}

export default Food