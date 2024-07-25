import { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    
    const [email, setEmail] = useState("");
    
  
   const navigate = useNavigate()
  
  
    const handleSumbit = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/forgot-password", {
        
        email,
        
      })
        .then((response) => {
          if(response.data.status){
            alert("check you email for reset password link")
              navigate('/login')
          }
         
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <div>
     <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSumbit}>
        <h2>Forgot Password</h2>

        

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />


        <button type="submit">Send</button>
        
      </form>
    </div>
    </div>
  )
}

export default ForgotPassword





