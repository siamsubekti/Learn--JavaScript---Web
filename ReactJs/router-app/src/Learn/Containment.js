import React from 'react';
import '../Learn/Learn.css';

function FancyBorder(props) {
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Containment () {
    return(
            <FancyBorder>
            <h2 className="Dialog-title" color="blue">Welcome Learn Containment</h2>
            <p className="Dialog-message">Thanks For Read</p>
            </FancyBorder> 
    )
}

export default Containment;