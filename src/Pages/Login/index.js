import './style.css'
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
function Login(){
    const [user, setUser] = useState({username:"",password:"", errorMessage: ""});
    let state = false;
    const navigate = useNavigate()
      
    const handleUsernameChange = e =>{
      e.preventDefault()
      setUser({...user, username: e.target.value});
    };
  
    const handlePasswordChange = e =>{
      e.preventDefault()
      setUser({...user, password: e.target.value});
    };
    
 

    function handleSubmitForm(e){
        e.preventDefault();
        fetch(`https://638a12bf4eccb986e8a310ad.mockapi.io/users?username=${user.username}`,
        {method: 'GET'}).then((response) => response.json()).then((users) => {
          let userFound = users.find((newUser) =>
          newUser.username === user.username
          )
          console.log(userFound);
          let message = ''
          if (userFound != null) {
            if (user.username === userFound.username && user.password === userFound.password){
              localStorage.setItem("userId", JSON.stringify(userFound.id));
              state = true;
              navigate("/")
            } else {
              message = "Sai username hoac password"
            }
          } else {
            message = "Sai username hoac password"
          }
          setUser({
            ...user,
            password: "",
            errorMessage: message,
          })
        });
    }
  
    return(
      <div className="form">
        <h1 style={{margin: 0, marginBottom: 30}}>Login to listen</h1>
        <form>
          <div>
            <label>Enter your username</label>
            <br/>
            <input type="text" name="username" onChange={handleUsernameChange} className="username"/>
          </div>
          <div>
            <label>Enter your password</label>
            <br/>
            <input type="password" name="password" onChange={handlePasswordChange} className="password"/>
          </div>
          <div>
            <input type="submit" className="login-button" onClick={handleSubmitForm}/>
          </div>
        </form>
        <div>{state === true ? <></> : user.errorMessage}</div>
      </div> 
    )
}

export default Login;
