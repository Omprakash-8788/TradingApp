import React, { useEffect, useRef, useState } from "react";
import "./ReviewForm.css";
import { useNavigate } from "react-router";

function ReviewForms(props) {
  const [name, setName] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [nameisValid, setNameisValid] = useState(false);
  const [nameisTouched, setNameisTouched] = useState(false);
  const [formisValid, setFormisValid] = useState(false);

  const [email, setEmail] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailisValid, setEmailisValid] = useState(false);
  const [emailisTouched, setEmailisTouched] = useState(false);

  const [description, setDescription] = useState("");
  const [descriptionisvalid, setDescriptionisvalid] = useState(false);
  const [descriptionistouched, setDescriptionistouched] = useState(false);

  const emailisInvalid = !emailisValid && emailisTouched;

  const addressisINvalid = description.trim() !== "" && descriptionistouched;
  const nameValidation = enteredName.trim() === "";
  const nameisInvalid = nameValidation && !nameisTouched;
  const navigate = useNavigate();

  // const collectData = async (e) =>{
  //   console.log(name, email, description)
  //   e.preventDefault('');
  //   const data ={
  //       name:name,
  //        email:email,
  //       description:description,
  //   }
  //   let results = await fetch('http://localhost:9000/ratings',{
  //     method:'POST',
  //     body:JSON.stringify(data),
  //     headers:{
  //       'Content-Type':'applicat1ion/json'
  //     }
  //   });
  //    results =  await results.json()
  //   console.log(results)
  // }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data ={
            name:name,
             email:email,
            description:description,
        }

    fetch('https://localhost:9000/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from API:', data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error
      });
  };

  // const collectData = (e) => {
  //   e.preventDefault();
  //   setName("");
  //   setEmail("");
  //   setDescription("");
  //   console.log('working')

  //   // Send the form data to the backend
  //   fetch("http://localhost:9000/rating", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, description }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // Handle response from the backend if needed
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       // Handle error if needed
  //     });
  // };

  const submitHandler = async (e) => {
    console.log(name);
    e.preventDefault("");
    setNameisTouched(true);
    setEmailisTouched(true);
    setDescriptionistouched(true);
    alert(name + " your view is appreciated");
    setNameisValid(true);
    setEnteredName("");
    setEnteredEmail("");
    setDescription("");
    setNameisTouched(false);
    setEmailisTouched(false);
    setDescriptionistouched(false);
    setName("");
    setDescription("");
    setEmail("");

    if (!name) {
      return "";
    } else {
      let result = await fetch("http://localhost:6000/review", {
        method: "post",
        body: JSON.stringify(name),
        headers: {
          "Content-type": "application/json",
        },
      });
      result = await result.json();
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setNameisValid(true);
    }
  };

  const blurHandler = (e) => {
    setNameisTouched(true);
    if (nameValidation) {
      setNameisTouched(true);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) {
      setEmailisValid(true);
    }
  };

  const emailblurHandler = (e) => {
    setEmailisTouched(true);
    if (enteredEmail.includes("@")) {
      setEmailisValid(true);
    }
  };

  const addressHandler = (e) => {
    setDescription(e.target.value);
    if (description.trim() !== "") {
      setDescriptionisvalid(true);
    }
  };

  const addressblurHandler = (e) => {
    setDescriptionistouched(true);
    if (enteredEmail.trim() !== "") {
      setDescriptionistouched(true);
    }
  };

  return (
    <div>
      <div className="review-form-container">
        <form className="review-sec-container" onSubmit={handleSubmit}>
          <h4 className="review-heading">Give your review here</h4>
          <div className="field">
            <section>
              <label className="review-label">Name</label>
            </section>
            <section>
              <input
                className="review-label-input"
                placeholder="Enter your nick name..."
                onChange={nameHandler}
                value={name}
                onBlur={blurHandler}
              />
            </section>
          </div>
          {/* {nameisInvalid && <p className="warning">Name can not be empty</p>} */}
          <div className="field">
            <section>
              <label className="review-label">Email</label>
            </section>
            <section>
              <input
                className="review-label-input"
                placeholder="Enter your email... "
                onChange={emailHandler}
                value={email}
                onBlur={emailblurHandler}
              />
            </section>
          </div>
          {/* {emailisInvalid && (
          <p className="warning">Enter valid email address</p>
        )} */}
          <div className="field">
            <section>
              <label className="review-label">Description</label>
            </section>
            <section>
              <input
                className="review-label-input"
                placeholder="Enter your description..."
                onChange={addressHandler}
                value={description}
                onBlur={addressblurHandler}
              />
            </section>
          </div>
          {/* {addressisINvalid && <p className="warning"> Description can not be empty</p>} */}

          <div className="review-button-container">
            <button type="submit" className="review-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForms;

// import React from 'react';
// import {useNavigate} from 'react-router-dom'

// const AddProduct = () => {
//     const [name, setName] = React.useState('');
//     const [price, setPrice] = React.useState('');
//     const [category, setCategory] = React.useState('');
//     const [company, setCompnay] = React.useState('');
//     const [error,setError] = React.useState(false);
//     const navigate = useNavigate();
//     const addProduct = async () => {

//         if(!name || !price || !company || !category)
//         {
//             setError(true);
//             return false
//         }

//         // const userId = JSON.parse(localStorage.getItem('user'))._id;
//         let result = await fetch("http://localhost:6000/review", {
//             method: "post",
//             body: JSON.stringify({ name, price, category, company,  }),
//             headers: {
//                 "Content-type": "application/json"
//             }
//         });
//         result = await result.json();
//         console.warn(result)
//         navigate('/')

//     }

//     return (
//         <div className='product'>
//             <h1>Add Product</h1>
//             <input type="text" placeholder='Enter product name' className='inputBox'
//                 value={name} onChange={(e) => { setName(e.target.value) }}
//             />
//             {error && !name && <span className='invalid-input'>Enter valid name</span>}

//             <input type="text" placeholder='Enter product price' className='inputBox'
//                 value={price} onChange={(e) => { setPrice(e.target.value) }}
//             />
//             {error && !price && <span className='invalid-input'>Enter valid price</span>}

//             <input type="text" placeholder='Enter product category' className='inputBox'
//                 value={category} onChange={(e) => { setCategory(e.target.value) }}
//             />
//             {error && !category && <span className='invalid-input'>Enter valid category</span>}

//             <input type="text" placeholder='Enter product company' className='inputBox'
//                 value={company} onChange={(e) => { setCompnay(e.target.value) }}
//             />
//             {error && !company && <span className='invalid-input'>Enter valid company</span>}

//             <button onClick={addProduct} className='appButton'>Add Product</button>
//         </div>
//     )
// }

// export default AddProduct;
