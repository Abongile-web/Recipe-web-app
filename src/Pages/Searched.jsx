import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from 'styled-components'

function Searched() {

  const [search, setSearch] = useState([])
  let params = useParams()

  const getSearch = async (name)=> {

     //see if trending is saved in local storage 
    //  const check = localStorage.getItem('search');

    //  if (check) {
    //      setSearch(JSON.parse(check));

    //      console.log(search)
    //  }
    //  else {

    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=24`)

    const data = await api.json();

    // localStorage.setItem('search', JSON.stringify(data.results));

    setSearch(data.results)

    console.log(search)

    //  }
  }

  useEffect(()=> {
    getSearch(params.search);
  }, [params.search])

  return (
    <div>
      <Heading>
        Searched results:
      </Heading>

    <ImageCard>
      {search.map((result)=> {
        return(
          <Card key={result.id}>
            <Link to={"/recipe/" + result.id}>
            <div>
              <img src={result.image} alt={result.title}/>
              <h1>{result.title}</h1>
            </div>
            </Link>
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

  @media screen and (max-width: 768px){
    padding: 10px;
    font-size: 38px;
  }
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

        @media screen and (max-width: 768px){
          width: 320px;
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

export default Searched