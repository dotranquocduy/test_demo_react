// class component
// function component

import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
 class MyComponent extends React.Component {

    
    state ={
        name: 'duy',
        address:'55/27 nguyen phuc chu',
        age: 24
      };
      
      handleClick = (event) => {
        console.log(">>> click me my button")
        
        // merge state  => react class

        this.setState({
            name :'duytran',
            age:  Math.floor((Math.random()*100)+1)
        })
    }
       
   
      handleMouseOver = (event) => {
        console.log(event.pageX);
      }
      handleOnChangeName = (event) =>{
        this.setState({
           name :event.target.value
        })
     
      }
      handleOnChangeAge =(event) =>{
        // bad code  => this.state.age = event.target.value;
        
        this.setState({
            age : event.target.value
        })
      }

      handleOnSubmit =(event) =>{
        event.preventDefault(); // ngan chan load lai trang 
        console.log(this.state);
      }

   
   //jsx => chuyen doi viết code javascript bên trong code html
    render() {
        return (
            <div>
                My first my component
               <br></br> My name : {this.state.name} and {this.state.age}
              
                <form onSubmit={(event)=>{ this.handleOnSubmit(event) }}>
                    <label > your name : </label>
                    <input type="text"
                    value={this.state.name}
                    onChange={(event)=>{
                        this.handleOnChangeName(event)
                    }}
                    />
                    <label > your age : </label>
                    <input type="text"
                    value={this.state.age}
                    onChange={(event)=>{
                        this.handleOnChangeAge(event)
                    }}
                    />
                    <button>submit</button>
                </form>
            </div>
           
        );
    }

}

export default MyComponent;