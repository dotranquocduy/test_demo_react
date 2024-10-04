// class component
// function component

import React from "react";
class MyComponent extends React.Component {

    state ={
        name: 'duy',
        address:'55/27 nguyen phuc chu',
        age: 24
      };
   
   //jsx => chuyen doi viết code javascript bên trong code html
    render() {
        return (
            <div>
                My first my component
               <br></br> My name : {this.state["name"]} and {this.state.address}
            </div>
           
        );
    }

}

export default MyComponent;