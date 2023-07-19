import React from "react";

import ReviewForms from "./appIndex";
import Login from "./Login";

const LoginIndex = (props) => {
  async function addDatas(Details) {
    console.log(Details)
    const response = await fetch(
     
      "https://newon-35d97-default-rtdb.firebaseio.com/Review.json",
      {
        method: "POST",
        body: JSON.stringify(Details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
   
  }
  return (
    <React.Fragment>
      <section>
       
        {/* <ReviewForms  onAddMovie={addMovieHandler}/> */}
        <Login addData = {addDatas} />
      </section>
    </React.Fragment>
  );
};

export default LoginIndex;
