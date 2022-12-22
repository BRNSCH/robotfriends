import React from "react";
import './SearchBox.css';


const SearchBox = ({searchChange}) => {
    return (
        
        <div className="search-main">
            <input
                className=""
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />

        </div>
    )
};

export default SearchBox;