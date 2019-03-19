import React, { Component } from 'react';
import './App.css';
import { freemem } from 'os';

class App extends Component {
constructor(){
  super()
  this.state={
         firstName: "",
         lastName: "",
         age:"",
         gender:"",
         destination:"",
         isVegan:false,
         isKosher:false,
         isLactoseFree:false,
        }
    this.handleChange=this.handleChange.bind(this)    
}

handleChange(event){
  const  {name, value, type, checked } = event.target
  type === "checkbox" ?
  this.setState({
    [name]:checked
  })
   :
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
              <option value="">-- Please Choose a destination --</option>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="uruguay">Uruguay</option>
              <option value="chile">Chile</option>
          </select>
           <br/>
         <label>
             <input
             type="checkbox"
             name="isVegan"
             onChange={this.handleChange}
             checked={this.state.isVegan}
             /> Vegan?
          </label>
            <br/>
            <label>
                <input
                  type="checkbox"
                  name="isKosher"
                  onChange={this.handleChange}
                  checked={this.state.isKosher}
                /> Kosher?
          </label>
            <br/>

            <label>
               <input
                type="checkbox"
                name="isLactoseFree"
                onChange={this.handleChange}
                checked={this.state.isLactoseFree}
             /> Lactose Free
          </label>
            <br/>



       </form>

       <hr/>
        
<h2>Entered information:</h2>
<p>Your name: {this.state.firstName} {this.state.lastName} </p>
<p>Your age: {this.state.age}</p>
<p>Your gender: {this.state.gender}</p>
<p>Your destination:{this.state.destination}</p>
<p>Your dietary resttrictions:</p>
<p>Vegan {this.state.isVegan ? "Yes" : "No"}</p>
<p>Kosher {this.state.isKosher ? "Yes" : "No"}</p>
<p>Lactose Free {this.state.isLactoseFree ? "Yes" : " No"}</p>
     </main>
    );
  }
}

export default App;
