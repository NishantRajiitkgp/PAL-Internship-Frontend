import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Title/Title'
import Card from '../Components/Card/Card'
import './Home.css'


const Home = () => {
  return (
    <>
     <Navbar />
     <Title />
     <div className="all-cards">
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     </div>
     
    </>
  )
}

export default Home