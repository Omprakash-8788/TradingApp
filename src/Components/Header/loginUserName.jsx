import React, { useEffect, useState } from 'react'
import LoginHooks from '../Login/LoginHook';


const LoginUserName = () => {
    const {login, setLogin} = LoginHooks();
    const [data, setData] = useState('');
    const [userId, setUserId] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:9000/userName'); // Replace '/api/data' with your actual API endpoint
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        
    
        fetchData();
      }, []);
      for (let i = 0; i < data.length; i++) {
       if(data[i]){
        userId.push(data[i]._id)
       }
    }
    
    const userDetails = localStorage.getItem('name')
    console.log(userDetails)
      let nameName = localStorage.getItem('id')
      console.log(userId)
      if(nameName === userId){
        setData(userDetails)
      }
      console.log(data)
  return (
    data,
    setData
  )
}

export default LoginUserName