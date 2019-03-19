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
    this.handleChange=this.handleChange.bind(this)    
}

handleChange(event){
  const  {name,value} = event.target
  this.setState({
    [name]:value
  })
}

  render() {
    return (
     <main>
       <form>
        <input 
              name="firstName" 
              value={this.state.firstName} 
              placeholder="First name" 
              onChange={this.handleChange}
              />
              <br/> 
        <input 
              name="lastName" 
              value={this.state.lastname} 
              placeholder="Last name" 
              onChange={this.handleChange}
              />
              <br/> 
        <input 
              name="age" 
              value={this.state.age} 
              placeholder="Age" 
              onChange={this.handleChange}
              />
              <br/> 
        <label>
            <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender==="male"}
                onChange={this.handleChange}
              /> Male
         </label>
         <br/>
         <label>
            <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender ==="female"}
                onChange={this.handleChange}
              /> Female
         </label>
         <br/>
        
        <select
        name="destination"
        value={this.state.destination}
        onChange={this.handleChange}

        >
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="uruguay">Uruguay</option>
          <option value="chile">Chile</option>
          </select>
       </form>

       <hr/>
        
<h2>Entered information:</h2>
<p>Your name: {this.state.firstName} {this.state.lastName} </p>
<p>Your age: {this.state.age}</p>
<p>Your gender: {this.state.gender}</p>
<p>Your destination:{this.state.destination}</p>
<p>
  Your dietary resttrictions:
</p>
     </main>
    );
  }
}

export default App;
