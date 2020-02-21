import React from 'react';
import '../App/App.css';
import Header from '../shared/Header';
import EmployeCard from './employe-detail/Employe-Card'

class EmployePage extends React.Component {
    render() {
        return(
            <div className="employepage">
                <Header headerName="Employe Page"/>            
                <body className="body">
                <div>
                    <div className="employitem">
                        
                            <EmployeCard employee={this.props.employee}/>
                            
                            </div>
                        
                </div>
                </body>
            </div>
        )
    }
}

export default EmployePage;