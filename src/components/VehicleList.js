import React, { useState, useEffect } from 'react'
import Home from './Home';
import VechileCards from './VechileCards';
import VechileDetailPage from './VechileDetailPage';

export default function VehicleList({ userDetail, setUserDetail }) {
  const { token } = userDetail;
  const [allData, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [detailPage, setDetailPage] = useState(false);
  const [vechileClicked, setVechileClicked] = useState(null);
  const [vechileData, setVechileData] = useState(null);

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
        setVechileData(data[0].vehicles)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(vechileData,"vechileData")

  return (
    <div>
      <Home userData={userData} detailPage={detailPage} vechileData={vechileData} setVechileData={setVechileData} setUserData={setUserDetail} />
      {!detailPage ?
        <VechileCards vechileData={vechileData} userData={userData} setDetailPage={setDetailPage} setVechileClicked={setVechileClicked} /> :
        <VechileDetailPage vechileClicked={vechileClicked} userData={userData} setDetailPage={setDetailPage} />}
    </div>
  )
}
