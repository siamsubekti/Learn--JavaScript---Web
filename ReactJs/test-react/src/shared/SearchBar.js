import React from 'react';

function SearchBar (props) {
        // const {handleChange} = props;
        return (
            <div class="search-container">  
                <input type="text" className="search" onChange={props.handleChange} placeholder="search"/>
            </div>        
        
            )
        }
    

    export default SearchBar;