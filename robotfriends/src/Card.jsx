import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, email, id} = props;
    return (
        
        <div className='card-robot'>
            <img className="robot-img" src={`https://robohash.org/${id}?bgset=bg1`} alt="photo" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    )
}

export default Card;