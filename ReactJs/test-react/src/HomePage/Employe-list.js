import React from 'react';
import EmployeListItem from './Employe-list-item';


import SearchBar from '../shared/SearchBar';

class EmployeList extends React.Component {
    
    render() {
        const {employees, handleClickEmployee, handleChange} = this.props;
        return(
            <div>
                <body className="employelist">
                   
                       {/* {employees.map(employee => employee.name).iterable.filter((item) => {
                         return Object.keys(item).some(key => item[key].toString()
                         .SearchBar(this.state.value.toLowerCase())) >= -1;
                        
                       })} */}
                       {/* {employees.map(item).filter(employee => (
                       
                       ))} */}
                       <div>
                        
                       <SearchBar searchName="" handleChange={handleChange}/>
                       
                       </div>
                <div>
                    {employees.map(employee => (  
                        <EmployeListItem key={employee.id} employee={employee} 
                        handleClickEmployee={handleClickEmployee} /> 

                    ))}
                    
                </div>
                </body>
            </div>
        )
    }
}

export default EmployeList;