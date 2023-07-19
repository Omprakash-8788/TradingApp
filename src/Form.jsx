import React, { useState } from 'react'


const Form = () => {
    const [name, setName] = useState("");

    const collectData = async () =>{

      let userReview = await fetch('http://localhost:5000/review',{
        method:'POST',
        body: {
          name:name
        },
        headers:{
          'Content-Type':'applicat1ion/json'
        }
      });
      let userData = await userReview.json()
      console.log(userData)
      console.log('j')

    }
  return (
    <div>
        <form onSubmit={collectData}>
        <div >
        <label>Name</label>
        <input
      
        onChange={(e) => setName(e.target.value)}
          placeholder="Enter your nick name..."
        />
      </div>
      <div>
      <label>email</label>
        <input
        
          placeholder="Enter your email..."
        />
      </div>
      <button type='submit' >Submit</button>
        </form>
       
    </div>
  )
}

export default Form