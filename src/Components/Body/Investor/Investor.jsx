import { Box, Card, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Investor.css";
import { NavLink } from "react-router-dom";

const Investor = () => {
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
      <div className="investor-container">
        <div>
          <h1 className="create-investor">Creating proud investors.</h1>
          <section>
            <h4 className="create-investor">
              You can feel the pride of being a Groww investor in their words
            </h4>
            <NavLink to="review">
              <h5 className="view-more-heading"> View More -></h5>
            </NavLink>
          </section>
        </div>

        <div className="inv-container-fluid mt-2 ml-0 investor-card-container">
          <div className="row text-center">
            {data.slice(0, 3).map((ele, key) => {
              return (
                <div key={ele.id} className="col-10 col-md-3 mt-5">
                  <div className="boxes card p-4 ">
                    <div
                      style={{ height: "fit-content", width: "230px" }}
                      class="align-items-cnter"
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
                            <Typography component="legend">{ele.id}</Typography>
                            <Rating name="read-only" value={value} readOnly />
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
                          {ele.description.slice(0, 200)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
