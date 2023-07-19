import React from "react";

import ReviewForms from "./appIndex";

const AppIndex = (props) => {
  async function addMovieHandler(Details) {
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
        <ReviewForms  onAddMovie={addMovieHandler}/>
      </section>
    </React.Fragment>
  );
};

export default AppIndex;
