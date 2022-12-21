import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {

    const CardComponent = robots.map((user, id) => {
        return <Card key={id} id={robots[id].id} name={robots[id].name} email={robots[id].email} />
    })

    return (
        
        <div className='cards'>
            {CardComponent}
           
        </div>
    )
}
export default CardList;