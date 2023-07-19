import React from 'react'
import {Stocks} from './API'
import { Charts } from '../../Charts/Charts'
import {useNavigate} from "react-router-dom"

const Stockdata = () => {
  return (
    <div>
        <h1>hyee</h1>
       {Stocks.slice(0,1).map((ele) =>{
        return <div>
             <Charts name ={ele.name} company={ele.company} />
        </div>
       })}
       
    </div>
  )
}

export default Stockdata