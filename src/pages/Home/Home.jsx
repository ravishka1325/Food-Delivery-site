import React, { useState } from 'react'
import Header from '../../components/Header/Header' // Adjust the import path as needed
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home