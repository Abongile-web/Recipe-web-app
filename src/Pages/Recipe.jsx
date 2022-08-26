import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import {useParams, useNavigate, NavLink} from 'react-router-dom'
import {IoChevronBackCircleOutline} from 'react-icons/io5'

function Recipe() {

    let params = useParams();

    const [details, setDetails] = useState({})
    const [ingredients, setIngredients] = useState([])

    useEffect(()=>{
      getDetails()
  },[])

    const getDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

        const info = await data.json()

        setDetails(info)
        setIngredients(info.extendedIngredients)
    }

    console.log(details)
    console.log(ingredients)


    //Display different contents depending on header user clicks

    const summarysec = useRef()
    const ingredient = useRef()
    const steps = useRef()
    const ingredientHeading = useRef()
    const summaryHeading = useRef()
    const stepsHeading = useRef()

    const ingredientsSection = ()=> {

      let ingredientsSection = ingredient.current
      let summarySection = summarysec.current
      let stepsSection = steps.current
      let ingredientHead = ingredientHeading.current
      let summaryHead = summaryHeading.current
      let stepsHead = stepsHeading.current


      //Show relevant content
      summarySection.style.display = 'none'
      stepsSection.style.display = 'none'
      ingredientsSection.style.display = 'block'

      //Add underline to heading clicked
      ingredientHead.classList.add('active')
      summaryHead.classList.remove('active')
      stepsHead.classList.remove('active')

    }


    const summarySection = ()=> {

      let ingredientsSection = ingredient.current
      let summarySection = summarysec.current
      let stepsSection = steps.current
      let ingredientHead = ingredientHeading.current
      let summaryHead = summaryHeading.current
      let stepsHead = stepsHeading.current


      //Show relevant content
      summarySection.style.display = 'block'
      stepsSection.style.display = 'none'
      ingredientsSection.style.display = 'none'

      //Add underline to heading clicked
      ingredientHead.classList.remove('active')
      summaryHead.classList.add('active')
      stepsHead.classList.remove('active')

    }


    const stepsSection = ()=> {

      let ingredientsSection = ingredient.current
      let summarySection = summarysec.current
      let stepsSection = steps.current
      let ingredientHead = ingredientHeading.current
      let summaryHead = summaryHeading.current
      let stepsHead = stepsHeading.current


      //Show relevant content
      summarySection.style.display = 'none'
      stepsSection.style.display = 'block'
      ingredientsSection.style.display = 'none'

      //Add underline to heading clicked
      ingredientHead.classList.remove('active')
      summaryHead.classList.remove('active')
      stepsHead.classList.add('active')

    }



  return (
    <Page>

        <Container>

        <h1>{details.title}</h1>

          <Summary>
            
            <Image>
              <img src={details.image} alt={details.title} />
            </Image>

            <Content>

              <Headings>
                <h2 onClick={summarySection} ref={summaryHeading} className='active'>Summary</h2>
                <h2 onClick={ingredientsSection} ref={ingredientHeading}>Ingredients</h2>
                <h2 onClick={stepsSection} ref={stepsHeading}>Steps</h2>
              </Headings>

              <Context>

                <Text className='text' ref={summarysec}>
                  <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                </Text>        

                <Ingredients className='ingredients' ref={ingredient}>

                {ingredients.map((ingredient) => {
                  return (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  )
                  })}

                </Ingredients>

                <Steps className='steps' ref={steps}>

                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>

                </Steps>

              </Context>

              <HomeBtn>
                <IoChevronBackCircleOutline />
                <NavLink to={'/Recipe-web-app/'}>Home</NavLink>
              </HomeBtn>

            </Content>

            

          </Summary>
        </Container>

    </Page>
  )
}

const Page = styled.div `
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;

  h1 {
    font-size: 40px;
    padding: 20px 0;

    @media screen and (max-width: 768px) {
      padding: 5px 0;
    }
  }
`

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Summary = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

const Image = styled.div `

  margin: 40px 40px 40px 0;
  width: 700px;

  @media screen and (max-width: 768px){
    margin: 20px 0px 20px 0;
    width: 90vw;
  }

  img {
    width: 100%
  }
`

const Content = styled.div `
  width: 600px;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`


const Headings = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 20px 40px 0;
  transition: 0.3s ease;

  h2 {
    margin-right: 30px;
    cursor: pointer;
    font-size: 32px;

    @media screen and (max-width: 768px){
      font-size: 18px;
    }
  }

  .active {
    border-bottom: 4px solid #FF0022;
  }
`

const Context = styled.div `
`

const HomeBtn = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #FF0022;
  border: 2px solid white;
  color: white;
  padding: 10px 15px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s ease;

  svg {
    font-size: 14px;
  }

  a {
    padding-left: 3px;
    font-size: 14px;
    color: white;
    text-decoration: none;
  }

  :hover {
    background-color: white;
    border: 2px solid #FF0022;
    color: #FF0022;
    a {
      color: #FF0022;
    }
  }
  
`

const Text = styled.div `
  font-size: 18px;
`

const Ingredients = styled.div `
  display: none;
`

const Steps = styled.div `
  display: none;
`

export default Recipe