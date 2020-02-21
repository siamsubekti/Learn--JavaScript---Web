import React, { Component } from "react";
import { connect } from "react-redux";
import { park } from "../actions/index";

function mapDispatchToProps(dispatch){
    return {
        park: vehicle => dispatch(park(vehicle)),
    }
};

    class ParkVehicleForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                vehicle : "",
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
            const { vehicle } = this.state;
            this.props.park({ vehicle });
        }

        render() {
            console.log('RENDER PARK');
            
            const { vehicle } = this.state;
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="park">Park Vehicle</label>
                        <input
                            type="text"
                            id="park"
                            value={vehicle}
                            onChange={this.handleChange}/>
                    </div>
                </form>
            );
        }
    }

    const Form = connect(
        null, mapDispatchToProps)
        (ParkVehicleForm);

    export default Form;
