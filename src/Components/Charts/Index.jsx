import React from 'react'
import './Charts.css'
import { Charts } from './Charts'
import { StockData } from './API'

const Indexi = () => {
  return (
    <div className='App'>
        <div className='chart'>
        {StockData.slice(0, 2).map((ele) =>{
        return <div>
             <Charts name ={ele.name} company={ele.company} value={ele.currentValue} />
        </div>
       })}
                     
        </div>

    </div>
  )
}

export default Indexi