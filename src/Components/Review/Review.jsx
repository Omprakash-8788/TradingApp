import { Box, Card, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Review.css";

import AppIndex from "../ReviewForms/appReview";
import GetRequest from "../ReviewForms/GetFormData";

const Review = () => {
  const [value, setValue] = useState(4.5);
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.pujakaitem.com/api/products");
    setData(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="review-container">
        <section style={{textAlign:'center'}}>
            <h1>Testimonials</h1>
            <h3>Intelligent Investors on Groww</h3>
            <h5>Read how Groww has made investing simple for smart investors living across the globe</h5>
        </section>
        <div style={{paddingLeft:'120px', paddingRight:'120px'}} className="inv-container-fluid mt-2">
          <div className="row text-center">
            {data.slice(0, 20).map((ele) => {
              return (
                <div  className="  col-10 col-md-3 mt-5">
                  <div className="boxes card p-3 ">
                    <div style={{height:"fit-content", width:'250px'}} class=" align-items-cnter">
                      <div style={{ display: "flex", }}>
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
                            <Typography component="legend">{ele.id}</Typography>
                            <Rating name="read-only" value={value} readOnly />
                          </Box>
                        </section>
                      </div>
                      <div class="ml-3 w-100">
                        <span style={{lineHeight:'30px',fontSize:'20px', fontFamily:'',}} >{ele.description.slice(0,200)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <AppIndex/>
        <GetRequest/>
      </div>
    </div>
  );
};

export default Review;
