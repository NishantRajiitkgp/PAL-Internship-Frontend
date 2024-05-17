import React from 'react'
import './NewRepository.css'

const NewRepository = () => {
    return (
        <div className="main-side">
            <h1><textarea id="heading" name="note" placeholder="Enter the project title"></textarea></h1>
            <div className="main-material">
                <h3>Project Description:-</h3>
                <p><textarea id="note" name="note" placeholder="Start typing..."></textarea></p>
            </div>
            <div className="main-material">
                <h3>Start Date:-</h3>
                <p><input type="date" id="start-date" name="start-date" /></p>
            </div>
            <div className="main-material">
                <h3>Skills Required:-</h3>
                <p><textarea id="note" name="note" placeholder="Start typing..."></textarea></p>
            </div>
            <div className="main-material">
                <h3>Duration:-</h3>
                <p><textarea class="date" name="note" placeholder="Duration..."></textarea></p>
            </div>
            <div className="main-material">
                <h3>Other Information:-</h3>
                <p><textarea id="note" name="note" placeholder="Start typing..."></textarea></p>  
            </div>
        </div>
    )
}

export default NewRepository