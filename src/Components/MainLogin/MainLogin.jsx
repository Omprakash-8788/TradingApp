import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import LoginStocks from "./LoginStock";
import "./Logins.css";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  border: "200px",
  boxShadow: 24,
  p: 0,
  borderRadius: "100px",
};

export default function MainLogin(props) {
  const [get, setGet] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  let one = props.value;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        className="mainlogin-button"
        style={{ color: "white", fontFamily: "georgia" }}
        onClick={handleOpen}
      >
        {props.value != "" ? props.value : ""}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="box-style-container">
            <div className="box-style">
              <h2>Simple, Free Investing</h2>
              <section style={{ padding: "200px 0px 0px 70px" }}>
                <LoginStocks />
              </section>
            </div>

            <div className="grow-container">
              <h1>Welcome to Groww</h1>

              <section className="grow-container-section">
                <h4>Continue with Google</h4>
                <section>
                  <h6 className="or-liness">or</h6>
                </section>
                <section className="login-email-inputs">
                  <input type="text" placeholder="Your Email Address" />
                </section>
                <section className="mainlogin-buttons">
                  <button>
                    <span>Continue</span>
                  </button>
                  <p>
                    By Processing, I Agree to T&C, Privacy Policy & Tariff Rates
                  </p>
                </section>
              </section>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
