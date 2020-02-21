import React from 'react';
import './App.css';
import Card from './Card';
import Input from './Input';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
     card : 1,
     nama : "",
     list : [
        "tambah 1",
        "tambah 2",
        "tambah 3"
     ]
    }
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleAdd = this.HandleAdd.bind(this);
    this.HandleRemove = this.HandleRemove.bind(this);
  }

HandleAdd(e) {
  // const name = e.target.value;
  this.setState({
    card : this.state.card +1
  })
}

HandleRemove(e) {

  this.state({
    card : this.state.card -1
  })
}

HandleChange(e) {
  console.log(e.target.value);
   this.setState({
    nama: e.target.value  
   });
 }
  render () {
  const cards=[];
  for (let index = 0; index < this.state.card; index++) {
    cards.push(<Card key={this.state.nama} nama={this.state.nama}/>)
    // cards.push(index) 
    
  }
  return (
    <div className="App">
      
     {/* <Card nama={this.state.nama}/> */}
     {cards}
     <Input HandleChange={this.HandleChange} 
     HandleAdd={this.HandleAdd} 
     HandleRemove={this.HandleRemove}/>
     <section>
      <ul>
        {this.state.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <hr/>
          <section>
            <form>
              <input type="text"
                     className="input"></input>
            </form>
          </section>
    </section> 
    </div>
  );
}
}

export default App;
