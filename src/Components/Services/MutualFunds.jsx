import React from 'react'
import MainLogin from '../MainLogin/MainLogin'
import './Service.css'

const MutualFunds = () => {
  return (
    <div className='mutual-fund-container'>
            <section>
              <img
              className="mutual-container-image"
              height="350px"
              width="600px"
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/mf.cfa5fda3.png"
                alt=""
              />
            </section>
            <section>
              <strong className='stock-free-text'>
                O%
              </strong>
              <span style={{ fontSize: "30px" }}>    commission</span>
              <section className='stock-maintenance'>
                <h5>
                  Select form 5000+ direct mutual funds and get higher return than
                  regularfunds.
                </h5>
              </section>
              <section className="stock-maintenance-button">
                <button className='stock-button'>
                  <span>
                  <MainLogin value= {'Create Account for Free'}/>
                  </span>
                </button>
              </section>
            </section>
          </div>
  )
}

export default MutualFunds