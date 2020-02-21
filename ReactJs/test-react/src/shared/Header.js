import React from 'react';
import '../App/App.css';

function Header (props) {
        return (
            <div className="column">
                <div className="column1">
                    <header>
                        <h1 className="headername">{props.headerName}</h1>
                    </header>
                </div>
            </div>
        )
    }


export default Header;