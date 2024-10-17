import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';
import EditUserInfo from "./EditUserInfo";
import { render } from "@testing-library/react";
// class DisplayInfo extends React.Component {

//     constructor(props){
//         super(props)
//         this.state= {
//             isShowIsUser:true,
//             isShowEditUser: false
//         }
//     }


//    handleShowhide=()=>{
//     this.setState({ 
//         isShowIsUser:!this.state.isShowIsUser,
        
//     })
//    }
//    handleShowhideEditUser=()=>{
//     this.setState({
//         isShowEditUser:!this.state.isShowEditUser
//     })
//    }


//     render() {
//         const {listUsers} =this.props;
//         // console.table(listUsers)
//         // console.log(this.props);
//         //props => tài sản (properties) // chuyển dữ liệu cha sang con  (bên class con nhận prop của cha)

//         return (
//             <>
//             <div className="display-spanshow">
//                 <span onClick={()=>this.handleShowhide()}>
//                     {this.state.isShowIsUser === true ?"hide list users":"show list users"}
//                     </span>
//             </div>

//             <div className="display-info-content">
//              <img src={logo} className="App-logo" alt="logo" />
//             {this.state.isShowIsUser && listUsers.map((item,index)=>{
               
//                return(
//                 <div key={item.id} className={+item.age>18 ? "red":"blue"}>
//                   <>
//                     <div>My info name is: {item.name}</div>
//                     <div>My info age is:{item.age} </div>
//                   </>
//                   <>
//                     <button onClick={()=>this.props.handleDeleteUser(item.id)}>Delete</button>
//                   </>
//                   <>
//                     <button onClick={()=>this.handleShowhideEditUser() }>
//                         {this.state.isShowEditUser === true? "Hide Edit":"Show Edit"}
//                     </button>
                    
            
//                     <br/>
//                     {
//                     <EditUserInfo
//                     handleEditUser ={this.props.handleEditUser(item)}
//                    />
//                     }

//                   </>
//                     <hr></hr>
//                 </div>
//                )
//             })}

//             </div>
                
               
//             </>
            

//         );
//     }
// }

const DisplayInfo = (props)=>{

    const {listUsers} = props;
    console.log(listUsers)
    const [isShowIsUser, setIsShowIsUser] = useState(true);
   const handleShowHide=()=>{
     setIsShowIsUser(!isShowIsUser)
        
    }

    useEffect(()=>{
        setTimeout(() => {
            document.title ="học it liên tục"
        }, 3000);
        console.log(">>>> read use effect")
        if(listUsers.length === 0){
            alert("danh sách user đã bị xóa!!")
        }
        
    },[listUsers]) // chạy 1 lần 
    // trong code có thể tạo ra nhiều useEffect chứ không phải 1
    //Mỗi useEffect có DI khác nhau

    return(
        <>
            <div className="display-spanshow">
                 <span onClick={()=>handleShowHide()}>
                     {isShowIsUser === true ?"hide list users":"show list users"}
                   </span>
            </div>
            <div className="display-info-content">
              <img src={logo} className="App-logo" alt="logo" />
             {isShowIsUser && listUsers.map((item,index)=>{
               
               return(
                <div key={item.id} className={+item.age>18 ? "red":"blue"}>
                  <div>
                    <div>My info name is: {item.name}</div>
                    <div>My info age is:{item.age} </div>
                  </div>

                  <div>
                    <button onClick={()=>props.handleDeleteUser(item.id)}>Delete</button>
                  </div>
                  
                    <hr></hr>
                </div>
               )
             })}

             </div>
        </>
    )
}
export default DisplayInfo;