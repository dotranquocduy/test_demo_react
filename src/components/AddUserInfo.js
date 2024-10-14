import React, { useState } from "react";

// class AddUserInfo extends React.Component{


//   constructor(props){
//     super(props);
//     this.state ={
//       name: 'duy',
//       address:'55/27 nguyen phuc chu',
//       age: 24
//     };
//   }
      
//       handleClick = (event) => {
//         // console.log(">>> click me my button")
//       // this.setState({
//       //   Name: 'duydo'
//       // })
      
      
//         // console.log(event.target.value)
//         // merge state  => react class

//         this.setState({
//             name :'duytran',
//             age:  Math.floor((Math.random()*100)+1)
//         })
//     }
       
   
//       handleMouseOver = (event) => {
//         console.log(event.pageX);
//       }
//       handleOnChangeName = (event) =>{
//         // console.log(event.target.value)
//         this.setState({
//            name :event.target.value
//         })
     
//       }
//       handleOnChangeAge =(event) =>{
//         // bad code  => this.state.age = event.target.value;
//          // console.log(event.target.value)
//         this.setState({
//             age : event.target.value
//         })
//       }

//       handleOnSubmit =(event) =>{
//         event.preventDefault(); // ngan chan load lai trang 
//         console.log(this.state);
//         //xử lí add user
//         this.props.handleAddUser({
//           id: Math.floor((Math.random()*100)+1)+'-random',
//           name: this.state.name,
//           age: this.state.age
//         });
//       }

//     render() {
//         return(
//          <div> 
//           {/* <button onClick={this.handleClick}> Click me </button> */}
//            {/* <button onMouseOver={this.handleMouseOver}> Click me </button> */}
//             <button onClick={()=>this.handleClick()}> Click me </button>
//           <br/>
//           <br/>

//             <br></br> My name : {this.state.name} and {this.state.age}
              
//               <form onSubmit={(event)=>{ this.handleOnSubmit(event) }}>
//                   <label > your name : </label>
//                   <input type="text"
//                   value={this.state.name}
//                   onChange={(event)=>{
//                       this.handleOnChangeName(event)
//                   }}
//                   />
//                   <label > your age : </label>
//                   <input type="text"
//                   value={this.state.age}
//                   onChange={(event)=>{
//                       this.handleOnChangeAge(event)
//                   }}
//                   />
//                   <button>Add submit</button>
//               </form>

//          </div>
            
//         )
//     }


// }


const AddUserInfo = (props)=>{

 const [id,setId]= useState(1);
 const [age,setAge]= useState(0);
 const [name,setName]= useState('');

//  console.log(listUsers)
//  console.log(listUsers[0].name)
 

 const handleMouseOver = (event) => {
    console.log(event.pageX);
  }

const handleClick = (event) => {
    console.log(">>> click me my button")
        //  listUser.name ="duydo"
  }
          

  const handleOnChangeName = (event) =>{
    // console.log(event.target.value)
   setName(event.target.value);
 
  }
  const handleOnChangeAge =(event) =>{
    // bad code  => this.state.age = event.target.value;
     // console.log(event.target.value)
    setAge(event.target.value);
  }

  const handleOnSubmit =(event) =>{
    event.preventDefault(); // ngan chan load lai trang 
  
    //xử lí add user
    props.handleAddUser({
      id: Math.floor((Math.random()*100)+1)+'-random',
      name: name,
      age: age
    });
    
  }

  return(
    <div> 
    {/* <button onClick={this.handleClick}> Click me </button> */}
     {/* <button onMouseOver={this.handleMouseOver}> Click me </button> */}
      <button onClick={()=>handleClick()}> Click me </button>
    <br/>
    <br/>

      <br></br> My name : {name} and {age}
        
        <form onSubmit={(event)=>{ handleOnSubmit(event) }}>
            <label > your name : </label>
            <input type="text"
            value={name}
            onChange={(event)=>{
                handleOnChangeName(event)
            }}
            />
            <label > your age : </label>
            <input type="text"
            value={age}
            onChange={(event)=>{
                handleOnChangeAge(event)
            }}
            />
            <button>Add submit</button>
        </form>

   </div>
  )
}
export default AddUserInfo;