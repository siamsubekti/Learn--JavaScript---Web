import React from 'react';
import '../Learn/Learn.css';
import Containment from './Containment';
import Specialitazion from './Specialitazion';

class AppLearn extends React.Component {
    render() {
        return(
            <div>
                <Containment/>
                <Specialitazion/>
            </div>
        )
    }
}

export default AppLearn;