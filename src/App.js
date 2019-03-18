import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state={
         firstName: "",
         lastName: "",
         age:"",
         gender:"",
         destination:"",
         dietaryRestirctions:[] 
        }
}

  render() {
    return (
     <main>
       <form>
        <input 
              name="firstName" 
              value={this.state.firstName} 
              placeholder="First name" /><br/> 
        <input 
              name="lastName" 
              value={this.state.lastname} 
              placeholder="Last name" /><br/> 
        <input 
              name="age" 
              value={this.state.age} 
              placeholder="Age" /><br/> 
        
       </form>
     </main>
    );
  }
}

export default App;
