import React, { Component } from 'react'

export default class Forms extends Component {
    state={
        inputValue:""
    };
    onHandleChange=(event)=>{
        this.setState({
        [event.target.name]:event.target.value
        });
        
    };
    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.inputValue);
        
    }
    render() {
        return (
           <form>
               <h2>Form component</h2>
               <input type="text" name="firstName" value={this.state.inputValue} onChange={this.onHandleChange}></input>
               <input type="text" name="lastName" value={this.state.inputValue} onChange={this.onHandleChange}></input>
               <button onClick={this.onSubmit}> 
                   Submit
               </button>
            
           </form>
        )
    }
}
