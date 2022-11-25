import React, { useState,useEffect } from 'react'
import Home from './Home';
import VechileCards from './VechileCards';
import VechileDetailPage from './VechileDetailPage';

export default function VehicleList({userDetail,setUserDetail}) {
    const { token } = userDetail;
    const [allData, setData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [detailPage, setDetailPage] = useState(false);
    const [vechileClicked, setVechileClicked] = useState(null);
  
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
      <Home userData={userData} setUserData={setUserDetail} />
    { !detailPage ? 
     <VechileCards userData={userData} setDetailPage={setDetailPage} setVechileClicked={setVechileClicked}/>:
     <VechileDetailPage vechileClicked={vechileClicked} userData={userData} setDetailPage={setDetailPage}/>}
    </div>
  )
}
