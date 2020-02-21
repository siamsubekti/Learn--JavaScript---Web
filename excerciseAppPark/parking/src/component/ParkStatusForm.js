import React, { Component } from "react";
import { connect } from "react-redux";
import { status } from "../actions/index";

function mapDispatchToProps(dispatch){
    return {
        status: statusVehicle => dispatch(status(statusVehicle))
    }
};

    class ParkStatusForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                status : ""
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({
                [event.target.id] : event.target.value
            });
        }

        handleSubmit(event){
            event.preventDefault();
            const { status} = this.state;
            this.props.status({ status });
        }

        render() {
            console.log('RENDER STATUS');
            
            const { status } = this.state;
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="status">Status</label>
                        <input 
                            type="text"
                            id="status"
                            value={status}
                            onChange={this.handleChange}/>
                    </div>
                </form>
            );
        }
    }

    const Form = connect(
        null, mapDispatchToProps)
        (ParkStatusForm);

    export default Form;
