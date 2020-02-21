import React from 'react';

class Card extends React.Component {
    
    render() {
        const {nama} = this.props;
        return (
            <div className="card">
                <h1>{nama}</h1>
            </div>
        )
    }
}

export default Card;