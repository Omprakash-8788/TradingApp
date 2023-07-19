import React from 'react'
import { Outlet } from 'react-router'

const Trialjs = () => {
  return (
   <>
    <div>
        <h2 style={{paddingTop:'200px'}}>Trial Js</h2>
    </div>
    <Outlet/>
   </>
  )
}

export default Trialjs