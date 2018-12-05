import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Counters from './components/counters';

class App extends Component {

  state = {
      counters:[
          {id:1,value:2},
          {id:2,value:0},
          {id:3,value:0},
          {id:4,value:0},
      ],
      tag :{
          a:33
      }
  }

  constructor(props){
    super(props);
    console.log('constructeur call here ');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

 


  removeList = (id) => {
      const counters = this.state.counters.filter(counter => counter.id != id);
      this.setState({ counters : counters });
  }

  plusOne = (key) => {
      const counters = this.state.counters;
      const Index    = counters.indexOf(key);
      counters[Index].value  = counters[Index].value+1;
      this.setState(this.state.counters = counters);
      //this.setState({ value : this.state.counters[key].value+1});
  }

  resetAll = () =>{
      const counters = this.state.counters.map(counter =>{ 
          counter.value = 0;
          return counter;
          }
      );
      this.setState({counters});
  }

  render() {
    return (
      <React.Fragment>
        <Navbar lentstate ={this.state.counters.length} />
        <main className="container">
          <Counters 
          resetAll = {this.resetAll} 
          counters={this.state.counters} 
          removeList = {this.removeList}
          plusOne = {this.plusOne}
          />
        </main>
      </React.Fragment>
    );
  }
}


export default App;
