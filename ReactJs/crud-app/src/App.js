import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    
    if (newItem.value !== "") {
      list.push(newItem.value);
      this.setState({
        list: list
      });

      newItem.classList.remove("remove");
      form.reset();
    } else {
      newItem.classList.add("add");
    }
  }

  removeItem(item) {
    const list = this.state.list.slice();
    list.some((el, i) => {
      if (el === item) {
      
        list.splice(i, 1);
        return true;
      }
    });
    
    this.setState({
      list: list
    });
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
              <List items={this.state.list} delete={this.removeItem} />
          </section>
          <hr />
          <section className="section">
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="..."
              />
              <button className="button is-info" onClick={this.addItem}>
                Add Item
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default App;