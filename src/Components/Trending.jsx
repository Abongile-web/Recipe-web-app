import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


function Trending() {

    const [trending, setTrending] = useState([]);

    useEffect(()=> {
        getTrending();
    },[]);

    //Async used because we need to wait for Data before rendering anything out
    const getTrending = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)

        const data = await api.json();
        setTrending(data.recipes);
    }

  return (
    <div>
        <Heading>Trending</Heading>

        <ImageCard>
            {trending.map((recipe) => {
                return(
                    <Card key={recipe.id}>
                        <div>
                        <img src={recipe.image} alt={recipe.title} />
                        <h1>{recipe.title}</h1>
                        </div>
                    </Card>
                );
            })}

        </ImageCard>
    </div>
  )
}

const Heading = styled.h1`
    padding: 2rem 2rem 0 2rem;
    font-size: 50px;
`

const ImageCard = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 2rem;
    
`;

const Card = styled.div`
    padding: 5px;
    
    div {
        width: 23vw;
        height: 400px;
        position: relative;
        border-radius: 10px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
        
        img {
            border-radius: 10px;
            width: 23vw;
            height: 400px;
            object-fit: cover;
            object-position: center;
            opacity: 0.6;
            
        }

        h1 {
            font-size: 24px;
            font-weight: bolder;
            position: absolute;
            bottom: 0;
            padding: 1rem;
            color: white;
        }
    }
`;

export default Trending