import { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link, useNavigate,useParams } from "react-router-dom";


const ResetPassword= () => {
    
    const [password, setPassword] = useState(" ");

    const{token}=useParams()
    
  
   const navigate = useNavigate()
  
  
    const handleSumbit = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/reset-Password/",+token, {
        
        password,
        
      })
        .then((response) => {
          if(response.data.status){
            
              navigate('/login')
          }
          console.log(response.data)
         
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <div>
     <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSumbit}>
        <h2>Reset Password</h2>

        

        <label htmlFor="password"> New Password</label>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />


        <button type="submit">Rest</button>
        
      </form>
    </div>
    </div>
  )
}

export default ResetPassword


