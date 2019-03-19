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
              placeholder="First name" />
              <br/> 
        <input 
              name="lastName" 
              value={this.state.lastname} 
              placeholder="Last name" />
              <br/> 
        <input 
              name="age" 
              value={this.state.age} 
              placeholder="Age" />
              <br/> 
        <label>
            <input
                type="radio"
                name="gender"
                value="male"
              /> Male
         </label>
         <label>
            <input
                type="radio"
                name="gender"
                value="female"
              /> Female
         </label>
        
        
       </form>

       <hr/>
        
<h2>Entered information:</h2>
<p>Your name:</p>
<p>Your age:</p>
<p>Your gender:</p>
<p>Your destination:</p>
<p>
  Your dietary resttrictions:
</p>
     </main>
    );
  }
}

export default App;
