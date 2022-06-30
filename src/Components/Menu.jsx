import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Menu() {

    const [menu, setMenu] = useState([]);

    useEffect(()=> {
        getMenu();
    },[]);

    const getMenu = async ()=> {
        
        //see if trending is saved in local storage 
        const check = localStorage.getItem('menu');

        if (check) {
            setMenu(JSON.parse(check));
        }
        else {
         const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=italian&number=8`);
    
            const data = await api.json();
            localStorage.setItem('menu', JSON.stringify(data.results));

            console.log(data)
            
            setMenu(data.results);
        }
    }

  return (
    <div>
                <Heading>Italian</Heading>

<ImageCard>
    <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "0rem",
        }}>
    {menu.map((result) => {
        return(
            <SplideSlide key={result.id}>
                <Card >
                    <div>
                    <img src={result.image} alt={result.title} />
                    <h1>{result.title}</h1>
                    </div>
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
`

const ImageCard = styled.div`
    display: flex;
    /* grid-template-columns: auto auto auto auto; */
    padding: 1rem 6rem;

    .splide {
        width: 100%;
    }
    
`;

const Card = styled.div`
    padding: 5px;
    
    div {
        width: 20vw;
        height: 350px;
        position: relative;
        border-radius: 10px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
        
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

export default Menu