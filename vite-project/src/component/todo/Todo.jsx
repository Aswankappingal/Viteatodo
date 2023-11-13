import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
 state={
  fname:""

 }


  Submit=(e)=>{
    e.preventDefault()
    const{fname}=this.state;
    console.log(fname);


    let data=document.getElementById("inp-value")
    function addTask()
    {
      const task=data.value;
      console.log(task);


      fetch("http://localhost:3001/api/addtask",{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({task})
   }).then(()=>{
       alert("Task Added");
   }).catch("Error")
  
   }
   addTask()
  


  }





  handlekey=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })

  }







  render() {
    return (
    <div>
      <div className='main-part'>
       <div className="main-sub">
       <div><input type="text" onChange={this.handlekey} name='fname' placeholder='Enter a Task' id='inp-value'/></div>
        <div><button onClick={this.Submit}>Add</button></div>
       </div>
    
    
      </div>
      <div className="child-one">
        {/* <button>Edit</button> */}
        <ul type='none'>
            <li>hai</li>
            <li>hai</li>
            <li>hai</li>
        </ul>

      </div>
      </div>
     
    )
  }
}
