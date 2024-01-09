import React, { useState } from "react";
// import emailjs from '@emailjs/browser';

const Signup = () => {
  const [formData,setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
     
  })

const handleSubmit =(e) =>{
  e.preventDefault();
const {  fname, lname, email, password 
} = formDate
  console.log(fname, lname, email, password)
  handleSubmit()
}


 

  

    return (
      <div className="mb-3">
        
          <form onSubmit={this.handleSubmit} className="fosm">
<div className="form-control">

<h2 className="silo" >Sign Up </h2>
            <label className="sil">First name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="First Name"
              required
              onChange={(e) => this.setState({fname: e.target.value})}
            />

</div>


<div className="mb-3">
            <label className="sil">Last  name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Last Name"            
              onChange={(e) => this.setState({lname: e.target.value})}
              required
            />

</div>

<div className="mb-3">
            <label className="sil">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => this.setState({email: e.target.value})}
              required
            />

</div>


<div className="mb-3">
            <label className="sil">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password" 
  onChange={(e) => this.setState({password: e.target.value})}
              required
            />

</div>
<div className="d-grid">
  
<button type="submit">Submit</button>
            <p className="folaa">Already registered <span><a href="/login">sign in?</a></span></p>
          
</div>
          </form>
      
      </div>
    );
  };
  
  export default Signup;