import React, { useEffect, useRef, useState } from "react";
import LoginHooks from "./LoginHook";
import { useNavigate } from "react-router";


const Form =()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState('')


  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        navigate('/')
    }
}, [])

  const submitHandler = async(event) => {
    event.preventDefault();
    setName("");
    setPassword("");
    setEmail("");
    localStorage.setItem('userName', name)
     
    let result = await fetch("http://localhost:9000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
              localStorage.setItem("user", JSON.stringify(result.result))
              localStorage.setItem("token", JSON.stringify(result.auth))
              localStorage.setItem("UserName", JSON.stringify(result.result.name))

              
        if(result.auth){
          navigate('/')
        }
              
  }

  

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // const sendData = () =>{
   
  //   const Details = {
  //       name: name,
  //       email: email,
  //       password: password,
  //     };
  //     props.addData(Details)
  // }
  // const navigate = useNavigate();
  //   useEffect(() => {
  //       const auth = localStorage.getItem('user');
  //       if (auth) {
  //           navigate('/')
  //       }
  //   }, [])

  //   const collectData = async () => {
  //       console.warn(name, email, password);
  //       let result = await fetch("http://localhost:9000/register", {
  //           method: 'post',
  //           body: JSON.stringify({ name, email, password }),
  //           headers: {
  //               'Content-Type': 'application/json'
  //           }
  //       });
  //       result = await result.json();
  //       console.warn(result);
  //       localStorage.setItem("user", JSON.stringify(result.result))
  //       localStorage.setItem("token", JSON.stringify(result.auth))

  //       navigate('/')
    
  //     }
  


  return (
    <form onSubmit={submitHandler}>
      <div className="login-container">
        <label>Name</label>
        <input
          placeholder="Enter your nick name..."
          onChange={nameHandler}
          value={name}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          placeholder="Enter your email... "
          onChange={emailHandler}
          value={email}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          placeholder="Enter your password..."
          onChange={passwordHandler}
          value={password}
        />
      </div>
      <button type="submit">Submitss</button>
    </form>
  );
}

export default Form;

