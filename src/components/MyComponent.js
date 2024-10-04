// class component
// function component

import React from "react";
class MyComponent extends React.Component {
   
   //jsx => chuyen doi viết code javascript bên trong code html
    render() {
        return (
            <div>
                My first my component
                {
                    Math.random()
                }
            </div>
           
        );
    }

}

export default MyComponent;