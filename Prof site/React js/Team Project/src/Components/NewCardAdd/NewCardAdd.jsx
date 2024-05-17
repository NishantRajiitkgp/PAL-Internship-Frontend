import React from 'react'
import './NewCardAdd.css'
import { Link } from 'react-router-dom'

const NewCardAdd = () => {
    return (
        <div className="cards-new">
            <div className="card-new">
                
                <Link to="/newcarddata"><h1 className="plus">+</h1></Link>
            </div>
        </div>
    )
}

export default NewCardAdd