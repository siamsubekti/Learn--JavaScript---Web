import React, { Component } from "react";
import { connect } from "react-redux";
import { createPark, park, leave, status } from "../actions/index";

function mapDispatchToProps(dispatch){
    return {
        createPark: parkSlot => dispatch(createPark(parkSlot)),
        park: vehicle => dispatch(park(vehicle)),
        leave: vehicle => dispatch(leave(vehicle)),
        status: statusVehicle => dispatch(status(statusVehicle))
    }
};

    class CreateParkingForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                parkSlot : "",
                vehicle : "",
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
            const { parkSlot, vehicle, status} = this.state;
            this.props.createPark({ parkSlot });
            this.props.park({ vehicle });
            this.props.leave({ vehicle });
            this.props.status({ status });
        }

        render() {
            console.log('RENDER CREATE');
            
            const { parkSlot, vehicle, status } = this.state;
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="createPark">Create Park</label>
                        <input
                            type="text"
                            id="parkSlot"
                            value={parkSlot}
                            onChange={this.handleChange}/>
                        <label htmlFor="park">Park Vehicle</label>
                        <input
                            type="text"
                            id="park"
                            value={vehicle}
                            onChange={this.handleChange}/>
                        <label htmlFor="leave">Leave</label>
                        <input
                            type="text"
                            id="leave"
                            value={vehicle}
                            onChange={this.handleChange}/>
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
        (CreateParkingForm);

    export default Form;
