import React from 'react';
import './App.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
    
    handleChange(e) {
        
    let currentList = [];
        
    let newList = [];
        
    if (e.target.value !== "") {
      currentList = this.props.items;
      newList = currentList.filter(item => {
                
        const lc = item.toLowerCase();
                
        const filter = e.target.value.toLowerCase();
                
        return lc.includes(filter);
      });
    } else {
            
      newList = this.props.items;
    }
        
    this.setState({
      filtered: newList
    });
  }
    
    render() {
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} 
                placeholder="Search..." />
                    <ul>
                        {this.state.filtered.map(item => (
                            <li key={item}>
                                {item} 
                                {/* &nbsp; */}
                                <span className="delete"
                                    onClick={() => this.props.delete(item)}
                                    />  
                            </li>
                        ))}
                    </ul>
                </div>
        )
    }
}

export default List;