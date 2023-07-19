import { Box, Rating, Typography } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";

const GetRequest = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const dataHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://newon-35d97-default-rtdb.firebaseio.com/Review.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();
  //     const detail = [];

  //     for (const key in data) {
  //       detail.push({
  //         id: key,
  //         description: data[key].description,
  //         email: data[key].email,
  //         name: data[key].name,
  //       });
  //     }
  //     setDatas(detail);
  //     console.log(detail)
  //     for(let i =0; i<detail.length; i++){
  //       if (detail[i].name === 'ashuu'){
  //           console.log("Ashu you can proceed")
  //       }
  //       else{
  //           console.log("Ashu create an account")
  //       }
  //     }
  //     console.log(detail[0].name)
  //     if(detail[0].name === 'Om Prakash Tiwari'){
  //       console.log("Proceed")
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  const dataHandler = async () => {
    // const getProducts = async () => {
    let result = await fetch("http://localhost:9000/getReview", {});
    result = await result.json();
    setDatas(result);
    console.log(datas);
  };

  // useEffect(() => {
  //   dataHandler();
  // }, [dataHandler]);

  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center", paddingTop: "50px" }}>User Review</h3>
      </div>
      <div style={{ paddingLeft: "200px" }} className="row text-center">
        {datas.map((ele) => {
          return (
            <div className="  col-10 col-md-3 mt-5">
              <div className="boxes card p-3 ">
                <div
                  style={{ height: "200px", width: "200px" }}
                  class=" align-items-cnter"
                >
                  <div style={{ display: "flex" }}>
                    <section>
                      <img
                        className="images"
                        src={ele.image}
                        alt=""
                        width="100"
                      />
                    </section>
                    <section>
                      <Box
                        component="fieldset"
                        mb={5}
                        borderColor="transparent"
                      >
                        <Typography component="legend">{ele.name}</Typography>
                        <Rating name="read-only" value={3} readOnly />
                      </Box>
                    </section>
                  </div>
                  <div class="ml-3 w-100">
                    <span
                      style={{
                        lineHeight: "30px",
                        fontSize: "20px",
                        fontFamily: "",
                      }}
                    >
                      {ele.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        {/* {datas.map((currElem, key=currElem.id) => (
            
          <>
            <h2>Name - {currElem.name}</h2>
            <h2>Email - {currElem.email}</h2>
            <h2>Description - {currElem.description}</h2>
          </>
        ))} */}
      </div>
    </div>
  );
};
export default GetRequest;
