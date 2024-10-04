// class component
// function component

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


   //jsx => chuyen doi viết code javascript bên trong code html
    render() {
        return (
            <div>
                My first my component
               <br></br> My name : {this.state.name} and {this.state.age}
               <button onClick={ (event) =>{this.handleClick(event)} }>click me</button>
               <button onMouseOver={this.handleMouseOver}>hover me</button>
            </div>
           
        );
    }

}

export default MyComponent;