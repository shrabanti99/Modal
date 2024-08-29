import { useState } from "react";
import "./form.css";
// import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [info,setinfo] = useState({
    username : "",
    email : "" ,
    phone : "" ,
    dob : "" ,
  })

  const handleChange = (e) => {
    setinfo({
      ...info,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={(e)=>{
            e.preventDefault()

            let atInEmail = info.email.indexOf("@")
            console.log(atInEmail)
            if (atInEmail < 0){
              alert("Invalid email. Please check your email address.")
            }

            if (info.phone.length < 10){
              alert("Invalid phone number. Please enter a 10-digit phone number.")
             }

             let currDate = new Date()
             let selectedDob = new Date(info.dob)
             if (selectedDob > currDate){
              alert("Invalid date of birth. Date of birth cannot be in the future.")
             }
              console.log(info)
            //  localStorage.setItem("username",info.username)
            //  localStorage.setItem("email",info.email)
            //  localStorage.setItem("phone",info.phone)
            //  localStorage.setItem("Dob",info.dob)
           }}>
            
           <h2>Fill Details</h2> <br />
          <label htmlFor="username">Username:</label> <br />
          <input
           value={info.username}
           onChange={handleChange} 
           required id="username" 
           name="username" type="text" />
          <br />
          <label htmlFor="email">Email Address:</label> <br />
          <input 
          value={info.email}
          onChange={handleChange} 
          required id="email" 
          name="email" type="email" />
          <br />
          <label required htmlFor="phone">
            Phone Number:
          </label>{" "}
          <br />
          <input
           value={info.phone}
           onChange={handleChange}
           required id="phone"
           name="phone" type="number" />
          <br />
          <label htmlFor="dob">Date of Birth:</label> <br />
          <input
           value={info.dob}
           onChange={handleChange} 
           required id="dob" 
           name="dob" type="date" /> <br />
           <button
          //  onClick={handleClick}
           type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}