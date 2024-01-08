
// import emailjs from '@emailjs/browser';

const Signup = () => {

 

  

    return (
      <div>
        
          <form className="fosm">
<div className="form-control">

<h2 className="silo" >Sign Up </h2>
            <label className="sil">First name</label>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              required
            />

</div>


<div className="form-control">
            <label className="sil">Last  name</label>
            <input
              type="text"
              name="name"
              placeholder="Last Name"
              required
            />

</div>

<div className="form-control">
            <label className="sil">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />

</div>


<div className="form-control">
            <label className="sil">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
            />

</div>
            <button type="submit">Submit</button>
            <p className="fola">Forgot <span><a href="">password?</a></span></p>
          
          </form>
      
      </div>
    );
  };
  
  export default Signup;