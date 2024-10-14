// class component
// function component
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
//  class MyComponent extends React.Component {

//     constructor(){
//       super()
//       this.state={
//         listUsers :[
//           {id:1, name:"tèo", age:30},
//           {id:2, name:"hello", age:14}
//         ]
//       }
//     }

//     handleAddUser=(userObject)=>{
//     // alert(`me`)
//     // console.log(userObject)
//     //bad code
//     // let listuserNew = this.state.listUsers;
//     // listuserNew.unshift(userObject)
    
//     this.setState({
//       // listUsers: listuserNew
//       listUsers : [ userObject,...this.state.listUsers]
//     })
//     }

//     handleDeleteUser=(userId)=>{
//       let listUsersNew =[...this.state.listUsers];
//       listUsersNew=listUsersNew.filter((itemId)=>{
//        return itemId.id !== userId
//       })
//       this.setState({
//         listUsers:listUsersNew
//       })
//     }
//     handleEditUser=({userObject})=>{
     
//       // console.log(userId)
//     //   let listUsersNew =[...this.state.listUsers];
//     //   listUsersNew=listUsersNew.filter((itemId)=>{
//     //    return itemId.id === 2
//     //   })
//     //   this.setState({
//     //     name :listUsersNew.name,
//     //     age:  listUsersNew.age
//     // })
      
     
//     }

   
//    //jsx => chuyen doi viết code javascript bên trong code html
//     render() {
//       const arrDisplay =[1,2,3,'dsds'];
//       const myDisplay = 50;
//       const ischeckDisplay = true;
//       //DRY: DON'T REPEAT YOURSEFT
//         return (
//           <>
          
//             <div className="a">
               
              
//                 <AddUserInfo
               
//                 handleAddUser={this.handleAddUser}
//                 />
//                 <br></br>
               
              
//                 {/* <DisplayInfo name="IT" age="24" />
//                 <hr></hr> */}

//                 <DisplayInfo 
//                 listUsers={this.state.listUsers}
//                 handleDeleteUser={this.handleDeleteUser}
              
//                 />
               
//                 {/* <DisplayInfo name={ischeckDisplay} age={myDisplay} arrDisplay={arrDisplay} /> */}
//             </div>
//             <div className="b"></div>
//           </>
//         );
//     }

// }

const MyComponent =(props) =>{
  const  [listUsers,setListUsers] = useState(
    [
      {id:1, name:"tèo", age:30},
      {id:2, name:"hello", age:14}
    ]
  );


  // Add new User 
   const handleAddUser=(userObject)=>{
    
    setListUsers([ userObject,...listUsers])
    }

    // Delete user
   const handleDeleteUser=(userId)=>{
      let listUsersNew =[...listUsers];
      listUsersNew=listUsersNew.filter((itemId)=>{
       return itemId.id !== userId
      })
      setListUsers(listUsersNew)
    }

  return(
    <>
          <div className="a">
               
              
                <AddUserInfo
                  handleAddUser={handleAddUser}
                />
                <br></br>

                <DisplayInfo 
                  listUsers={listUsers}
                  handleDeleteUser={handleDeleteUser}  
                />
               
            </div>
            <div className="b"></div>
    </>
  )
}

export default MyComponent;