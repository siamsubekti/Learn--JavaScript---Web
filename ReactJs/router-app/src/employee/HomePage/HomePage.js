import React from 'react';
import '../App/App.css';
import Header from '../shared/Header';
import EmployeList from './Employe-list';  


class HomePage extends React.Component {
    
    render() {
        const {employees, handleClickEmployee, handleChange} = this.props;  
        return (
            <div className="homepage">
                <div><Header headerName="Home Page" /></div>
            <div>
                <EmployeList employees={employees} handleClickEmployee={handleClickEmployee} handleChange={handleChange}/>    
            </div>
            </div>
                      
        )
    }
}

export default HomePage;