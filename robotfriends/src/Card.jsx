import React from 'react';
import './Card.css'

const Card = () => {
    return (
        
        <div className='card-robot'>
            <img className="robot-img" src="https://robohash.org/d27fg?bgset=bg1" alt="photo" />
            <div>
                <h2>Jane Doe</h2>
                <p>Jane.Doe@gmail.com</p>
            </div>
        </div>

    )
}

export default Card;