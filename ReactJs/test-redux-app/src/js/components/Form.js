import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle, addContent } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        addContent: article => dispatch(addContent(article))
    };
}

// function contentDispatchToProps(dispatch) {
//     return {
//         addContent: article => dispatch(addContent(article))
//     };
// }

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log('STATE',event.target.value);
        
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, content } = this.state;
        this.props.addArticle({ title });
        this.props.addContent({ content });
        this.setState({ title: "", content: "" });
        console.log('content: ', content);
        console.log('title: ', title);
        
    }

    render() {
        const { title, content } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange} />
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        id="content"
                        value={content}
                        onChange={this.handleChange} />
                </div>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

const Form = connect(
    null, mapDispatchToProps
)(ConnectedForm);

export default Form;