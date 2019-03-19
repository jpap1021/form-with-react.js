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
