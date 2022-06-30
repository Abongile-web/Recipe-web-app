import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function Dessert() {

  const [dessert, setDessert] = useState([])

  useEffect(()=> {
    getDessert();
  }, [])

  const getDessert = async ()=> {

     //see if trending is saved in local storage 
     const check = localStorage.getItem('dessert');

     if (check) {
         setDessert(JSON.parse(check));

         console.log(dessert)
     }
     else {

    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=dessert&number=24`)

    const data = await api.json();

    localStorage.setItem('dessert', JSON.stringify(data.results));

    setDessert(data.results)

    console.log(dessert)

     }
  }
  return (
    <div>
      <Heading>
        Dessert meals
      </Heading>

    <ImageCard>
      {dessert.map((result)=> {
        return(
          <Card key={result.id}>
            <div>
              <img src={result.image} alt={result.title}/>
              <h1>{result.title}</h1>
            </div>
          </Card>
        )
      })}
      </ImageCard>
    </div>
  )
}

const Heading = styled.h1`
  font-size: 50px;
  padding: 40px;
`

const ImageCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
    padding: 20px;
    
    div {
        width: 400px;
        height: 300px;
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

export default Dessert