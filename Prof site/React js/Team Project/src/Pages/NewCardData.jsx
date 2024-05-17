import React from 'react'
import './NewCardData.css'
import Navbar from '../Components/Navbar/Navbar'
import NewRepository from '../Components/NewRepository/NewRepository'

const NewCardData = () => {
  return (
    <>
    <Navbar />
    <div className="project-details">
      <h1>Please enter your project details</h1>
    </div>
    <NewRepository />
    <button type="submit" className="submit-new">Submit</button>
    </>
  )
}

export default NewCardData