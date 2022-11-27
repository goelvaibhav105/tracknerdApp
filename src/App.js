import { useEffect, useState } from "react";
import Login from "./components/Login";
import VehicleList from "./components/VehicleList";
import './index.css'

export default function App() {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const userDetailStr = JSON.stringify(userDetail)
    userDetail && localStorage.setItem('userDetail',userDetailStr) 
  }, [!userDetail])
  


  const getUserDetail = (details) => {
    setUserDetail(details);

  };

  const userDetailsStr =   localStorage.getItem('userDetail') 
  const userDetailsObject = JSON.parse(userDetailsStr)

  return (
    <div >
      {userDetailsObject ? (
        <VehicleList userDetail={userDetailsObject} setUserDetail={setUserDetail} />
      ) : (
        <div >

        <Login getUserDetail={getUserDetail} />
        </div>
      )}
    </div>
  );
}
