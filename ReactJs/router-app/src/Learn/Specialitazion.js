import React from 'react';

function FancyBorder(props) {
    return(
        <div className={"FancyBorder FancyBorder-"+ props.color}>
            {props.children}
        </div>
    )
}

function Dialog (props) {
    return (
        <FancyBorder color="blue">
            <h2 className="Dialod-title">
            {props.title}
            </h2>
            <p className="Dialog-message">
            {props.content}
            </p>
            {props.children}
        </FancyBorder>
    )
}

function Specialitazion () {
    return (
        <Dialog 
        title="Welcome Learn Specialitazion"
        content="Thanks for Read">
        <p>This is from props children</p>
        </Dialog>
    )
}

export default Specialitazion;