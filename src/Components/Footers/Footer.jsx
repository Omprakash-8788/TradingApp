import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-content">
          <section style={{ flex: "1" }}>
            <img
              height="50px"
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/logo-light-groww.d72ab2aa.svg"
              alt=""
            />
            <h6 style={{ paddingTop: "30px" }}>
              Vaishnavi Tech Park, 3rd Florr Sarjapur Main Road, Bellandur
              Bengaluru - 560103
              <p>Contact Us</p>
            </h6>
            <section style={{ gap: "10px", display: "flex" }}>
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/fb_icon_groww.30532469.svg"
                alt=""
              />
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/twitter_icon_groww.43dee78a.svg"
                alt=""
              />
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/yt_icon_groww.ebd07f19.svg"
                alt=""
              />
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/instagram_icon_groww.f8c7d006.svg"
                alt=""
              />
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/linkedin_icon_groww.a0c17280.svg"
                alt=""
              />
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/telegram_icon_groww.d144db3f.svg"
                alt=""
              />
            </section>
          </section>
          <section style={{ flex: "1" }}>
            <h3>Product</h3>
            <ul className="footer-list">
              <li>Stocks</li>
              <li>Futures & Options</li>
              <li>Mutual Funds</li>
              <li>US Stocks</li>
            </ul>
          </section>
          <section style={{ flex: "1" }}>
            <h3>Groww</h3>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Media & Press</li>
              <li>Careera</li>
              <li>Help and Support</li>
            </ul>
          </section>
          <section style={{ flex: "1" }}>
            <h3>Quick Links</h3>
            <ul className="footer-list">
              <li>AMC Mutual Funds</li>
              <li>Calculators</li>
              <li>GLossary</li>
              <li>Open Demat Account</li>
              <li>Groww Digest</li>
              <li>Groww Academy</li>
              <li>Sitemap</li>
            </ul>
          </section>
        </div>
        <section
          style={{
            borderBottom: "2px solid red ",
            marginLeft: "250px",
            marginRight: "250px",
          }}
        ></section>
        <section className="footer-content">
          <h5>
            All rights reserved. Build with{" "}
            <i style={{ color: "red" }} class="fa fa-heart"></i> in India
          </h5>
        </section>
      </div>
    </div>
  );
};

export default Footer;
