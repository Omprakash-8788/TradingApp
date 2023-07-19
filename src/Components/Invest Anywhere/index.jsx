import React from "react";
import "./InvestAnywhere.css";

const Indexs = () => {
  return (
    <>
      <div className="getindex-container">
        <div className="getindex-first">
          <p style={{fontFamily:'poppins', fontSize:'50px'}}>Invest Anywhere, Anytime.</p>
          <h5>
            Don't worry about which device to use. Because we're in every one of
            them.
          </h5>
          <section className="getfirst-container">
            <section>
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/dash.efde830d.svg"
                alt=""
              />
            </section>
            <section>
              <h3>Stay on top of Everything</h3>
              <h6>Keep track of your investments at anytime with groww.</h6>
            </section>
          </section>
          <section className="getsec-container">
            <section>
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/sync.1b51de2d.svg"
                alt=""
              />
            </section>
            <section>
              <h3>Always in Sync</h3>
              <h6>
                Groww will take care of synchronizing data so you can focus on
                investing.
              </h6>
            </section>
          </section>
        </div>
        <div className="getindex-sec">
          <section style={{ paddingLeft: "120px" }}>
            <img
              height="450px"
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/ios.f752d6f1.png "
              alt=""
            />
          </section>

          <section style={{ display: "flex", gap: "30px" }}>
            <img
              height="380px"
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/android.ed044d43.png"
              alt=""
            />
            <img
              height="380px"
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/web.266ffe38.png"
              alt=""
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Indexs;
