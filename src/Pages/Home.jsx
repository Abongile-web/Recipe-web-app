import React from 'react'
import Menu from '../Components/Menu'
import Trending from '../Components/Trending'
import Food from './Food'

function Home() {

  return (
    <div>
      <Trending />
      <Menu />
    </div>
  )
}

export default Home