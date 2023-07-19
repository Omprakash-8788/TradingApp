// import React from 'react'
// import * as firebase from "firebase/app";

// const FirebaseForm = () => {
//     const handleClick = () =>{
//         let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
//         let number = '+6307566010'
//         firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
//             let code = prompt('enter the otp', '')
//             if(code === null) return;
//             e.confirm(code).then(function(result){
//                 console.log(result.user,'user');
//                 document.querySelector('label').textContent = result.user.phoneNumber + "Number is Verified"
//             }).catch((error) =>{
//                 console.log(error)
//             })
//         })
//     }
//   return (
//     <div>
//         <form action="">
//             <input type="number" placeholder='Enter your mobile number' />
//             <button onClick={handleClick}>Click to get Otp</button>
//         </form>
//     </div>
//   )
// }

// export default FirebaseForm