import React, { useState } from "react";
// import emailjs from '@emailjs/browser';

const Signup = () => {
  const [state,setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
     
  })  

const handleSubmit =(e) =>{
  e.preventDefault();

  
const {fname, lname, email, password 
} = state;

 /* for disappearing form */
e.target.reset();

  fetch("http://localhost:7002/register", { 
    method: "POST",
    crossDomain: true,
    headers: {
      "content-Type" : "application/json",
      Accept : "application/json",
  
    }, 
    body:JSON.stringify({
      fname,
      lname,
      email,
      password,
    })
    
})
.then((res) => res.json())
.then((data) => {
  console.log(data, "userRegister")

}) 
.catch((error) => {
  console.error("Error during fetch:", error);
})

}


 

  

    return (
      <div className="mb-3">
        
          <form onSubmit={handleSubmit} className="fosm">
<div className="form-control">

<h2 className="silo" >Sign Up </h2>
            <label className="sil">First name</label>
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="First Name"
              required
              onChange={(e) => setState({...state, fname: e.target.value})}
            />

</div>


<div className="mb-3">
            <label className="sil">Last  name</label>
            <input
              type="text"
              name="lname"
              className="form-control"
              placeholder="Last Name"            
              onChange={(e) => setState({...state, lname: e.target.value})}
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
              onChange={(e) => setState({...state, email: e.target.value})}
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
  onChange={(e) => setState({...state, password: e.target.value})}
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