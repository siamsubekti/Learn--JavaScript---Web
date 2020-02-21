import React from 'react';
import '../../App/App.css';
import EmailIcon from '@material-ui/icons/Email';
import DraftsIcon from '@material-ui/icons/Drafts';
// import './';

class EmployeDetail extends React.Component {
    
    render () {
        if (this.props.employee == null) {
            return <p className="null">click anyway in profiles</p>
        }
        return (
            <div>       
                    <div>
                        <img className="gambaremploy" src={this.props.employee.photo} alt=""/>
                        <div className="tulisemploy">
                        <p>Name : {this.props.employee.name}</p>
                        <p>Position : {this.props.employee.position}</p>
                        <p>Detail :</p>
                        <p><EmailIcon></EmailIcon> {this.props.employee.detail.email}</p>
                        <p> {this.props.employee.detail.phone}</p>
                                    <p>{this.props.employee.detail.address}</p>
                        </div>
                        <div className="detail">
                           
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default EmployeDetail;