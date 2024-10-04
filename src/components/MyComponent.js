// class component
// function component

import UserInfo from "./UserInfo";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
 class MyComponent extends React.Component {

    
 

   
   //jsx => chuyen doi viết code javascript bên trong code html
    render() {
        return (
            <div>
                My first my component
              
                <UserInfo/>
            </div>
           
        );
    }

}

export default MyComponent;