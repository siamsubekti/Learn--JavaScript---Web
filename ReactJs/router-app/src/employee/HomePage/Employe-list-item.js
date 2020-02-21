import React from 'react';



function EmployeListItem (props) {
        const {employee, handleClickEmployee} = props;
        return(
            <div className="">
                <div className="">
                    <div className="user" onClick= {(e) => handleClickEmployee(employee)}>
                        <img className="gambar" src={employee.photo} alt=""/>
                        <div className="user1">
                            <p className="nama">{employee.name}</p>
                            <p className="nama2">{employee.position}</p>
                            
                        </div>
                    </div>
                </div>          
            </div>

        )
    }


export default EmployeListItem;