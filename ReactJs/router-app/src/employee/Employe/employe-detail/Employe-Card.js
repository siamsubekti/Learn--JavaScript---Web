import React from 'react';
import EmployeDetail from './Employe-Detail';

class EmployeCard extends React.Component {
    render () {
        return (
            <div className="employecard">
                <EmployeDetail employee={this.props.employee}/>
            </div>
        )
    }
}

export default EmployeCard;