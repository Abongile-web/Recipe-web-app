import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Trending() {

    const [trending, setTrending] = useState([]);

    useEffect(()=> {
        getTrending();
    },[]);

    //Async used because we need to wait for Data before rendering anything out
    const getTrending = async () => {

        //see if trending is saved in local storage 
        const check = localStorage.getItem('trending');

        if (check) {
            setTrending(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
    
            const data = await api.json();
            localStorage.setItem('trending', JSON.stringify(data.recipes));
            
            setTrending(data.recipes);
        }
        
    }

  return (
    <div>
        <Heading>Trending</Heading>

        
        <ImageCard>
        <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "0rem",
            breakpoints: {
                820: {
                    perPage: 3,
                },
                768: {
                    perPage: 2,
                }
            }
        }}>
            {trending.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                        <Card >
                            <Link to={"/recipe/" + recipe.id}>
                                <div>
                                <img src={recipe.image} alt={recipe.title} />
                                <h1>{recipe.title}</h1>
                                </div>
                            </Link>
                        </Card>
                    </SplideSlide>
                );
            })} 
            </Splide>
        </ImageCard>
        
    </div>
  )
}

const Heading = styled.h1`
    padding: 2rem 2rem 0 6rem;
    font-size: 50px;

    @media screen and (max-width: 768px){
        padding: 1rem 2rem 0 1rem;
    }
`

const ImageCard = styled.div`
    display: flex;
    /* grid-template-columns: auto auto auto auto; */
    padding: 1rem 6rem;
    /* overflow: hidden; */

    @media screen and (max-width: 768px){
        padding: 1rem 1rem;
    }

    .splide {
        width: 100%;
    }
    
`;

const Card = styled.div`
    padding: 5px;
    /* overflow: hidden; */
    
    div {
        width: 20vw;
        height: 350px;
        position: relative;
        border-radius: 10px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));

        @media screen and (max-width: 768px){
            width: 40vw;
    }
        
        img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0.8;
            
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