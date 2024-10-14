import React from "react";
class EditUserInfo extends React.Component{
 
    
  constructor(props){
    super(props);
    this.state ={
      name: 'duy',
      address:'55/27 nguyen phuc chu',
      age: 24
    };
   
  }
    
  

    handleOnSubmitEdit =(event) =>{
        event.preventDefault(); // ngan chan load lai trang 
        
        this.props.handleEditUser({
            id:this.state.id,
            name: this.state.name,
            age: this.state.age
          });
      }

      handleOnChangeNameEdit = (event) =>{
        console.log(event.target.value)
        this.setState({
           name :event.target.value
        })
     
      }
      handleOnChangeAgeEdit =(event) =>{
        // bad code  => this.state.age = event.target.value;
         // console.log(event.target.value)
        this.setState({
            age : event.target.value
        })
      }

      
    render(){
       

        

        return(
            <div >
              <form onSubmit={(event)=>{ this.handleOnSubmitEdit(event) }} >
                  <label > your name : </label>
                  <input type="text"
                  value={this.state.name}
                
                  />
                  <label > your age : </label>
                  <input type="text"
                  value={this.state.age}
                  
                  />
                  <button>Change</button>
              </form>
            </div>
        );
    }
}
export default EditUserInfo;