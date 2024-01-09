
// import emailjs from '@emailjs/browser';

const Login = () => {

 

  

  return (
    <div>
      
        <form >
          <h2 className="silo">Sign In</h2>

<labal className="sil">Email address</labal>
<div className="mb-3">
<input
          className="form-control"
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
</div>
         
<div className="mb-3">
<label className="sil">Enter password</label>
<input
          className="form-control"
            type="password"
            name="email"
            placeholder="Enter passwod"
            required
          />
</div>

          <button type="submit">Send</button>
          <p className="fola">Forgot <span><a href="/signup">password?</a></span></p>
          
        </form>
    
    </div>
  );
};

export default Login;





// import React from 'react'
// import { useState, useRef } from 'react'
// import emailjs from '@emailjs/browser';


// // npm install @emailjs/browser --save


// const Great = () => {
//   const [data,setData] = useState({name: "", email: "", phone: "", message: ""})
// const handleChange = (e) => {
// const  name = e.target.name;
// const value = e.target.value;
// setData({...data, [name]: value})
// }

  
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_quzvufn', 'template_xad8hgo', form.current, 'RIC4x65BxILJraNlf')
// .then((result) => {
//   console.log(result.text);
//   setMessage(true);
//   setFormSubmitted(true); // Set formSubmitted to true after successful submission
// })
// .catch((error) => {
//   console.log(error.text)
// })

//  /* for disappearing form */  
//  e.target.reset()

//     /* .then((result) => {
//       e.preventDefault()
//       setMessage(true)
//         console.log(result.text);
//         console.log("message sent")
//     }, (error) => {
//         console.log(error.text);
//     });
//      */
//   };

  
// const handleSubmit = (e) => {
//   e.preventDefault()
//   console.log(data)
  
//   // Call sendEmail function to send the email
//   sendEmail(e);

//   e.target.reset()
  
//   }
  
// const [message,setMessage] = useState(false)
// const [formSubmitted, setFormSubmitted] = useState(false); // New state for form submission

// const form = useRef(); 

//   return ( 
//     <div>
//       {formSubmitted ? ( 
//         <span>Thanks, I'll reply ASAP</span>
//       ): (
//         <form method='post' ref={form} onSubmit={handleSubmit} >
//     <h1>Contact <span>Here</span></h1>
//     <input type="text" name='name' id='' 
//     onChange={handleChange} value={data.name} placeholder='Full Name' />

//     <input type="email" name='email' id='id' 
//     onChange={handleChange} 
//     value={data.email}
//     placeholder='example@gmail.com' />
    
//     <input type="phone" name='phone' id='id'
//     onChange={handleChange}
//     value={data.phone}
//      placeholder='+234' required/>

//     <textarea name="message" id="" cols="30" rows="10" 
//     onChange={handleChange}
//     value={data.message}
//     placeholder='type here...'/>
//     <button type='submit'>Send</button>
    
//     </form>
//       )}
//     </div>
    
    
//   )
// }

// export default Great