import React, { useState,useEffect } from 'react'
import Home from './Home';
import VechileCards from './VechileCards';

export default function VehicleList({userDetail}) {
    const { token } = userDetail;
    const [allData, setData] = useState(null);
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      getVehicleList();
    }, []);
  
    const getVehicleList = () => {
      fetch(" https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          setData([...data]);
          setUserData([data[0]])
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <div>
      <Home userData={userData}/>
      <VechileCards userData={userData}/>
    </div>
  )
}
