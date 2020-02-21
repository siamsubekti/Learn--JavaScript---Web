import React, { Component } from "react";
import { connect } from "react-redux";
import { leave } from "../actions/index";

function mapDispatchToProps(dispatch){
    return {
        leave: vehicle => dispatch(leave(vehicle)),
    }
};

    class LeaveParkForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                vehicle : ""
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
            this.props.leave({ vehicle });
        }

        render() {
            console.log('RENDER LEAVE');
            
            const { vehicle } = this.state;
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="leave">Leave</label>
                        <input
                            type="text"
                            id="leave"
                            value={vehicle}
                            onChange={this.handleChange}/>
                    </div>
                </form>
            );
        }
    }

    const Form = connect(
        null, mapDispatchToProps)
        (LeaveParkForm);

    export default Form;
