import React from 'react';
import {
  Chart as ChartJS,
  
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';




const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export function Charts(props) {
  const data = {
 
    labels,
    datasets: [
      {
        label:`${props.company}`,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data:[ "2500","3000","3100",`${props.value}`]
      },
      // {
      //   label: 'Dataset 2',
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //   data:["1", "2","3","110","70"]
      // },
    ],
  };
  

  return <Line  data={data}  />;
}
