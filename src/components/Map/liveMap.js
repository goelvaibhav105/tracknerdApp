import { onValue, ref } from "firebase/database";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { firebaseDB } from "../firebase/firebase-config";
import Map from "./map";

const LiveMap = ({vechileClicked,setDetailPage}) => {

  const vehicleId = vechileClicked && vechileClicked.id
  const registrationNumber = vechileClicked && vechileClicked.registrationNumber
  const [vehicleData, setVehicleData] = useState(null);
  useEffect(() => {
    const dbRef = ref(
      firebaseDB,
      `${vehicleId}-${registrationNumber}/location`
    );
    onValue(dbRef, (snapshot) => {
      console.log("snapshot val", snapshot.val());
      const vehicleData = snapshot.val();
      setVehicleData(vehicleData);
    });
  }, [vehicleData && vehicleData.latitude]);


  return (
    <div>
      <div>
      <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
        <div className="flex flex-row justify-around">
          
                    <h2 className="text-lg text-purple-500 tracking-widest font-medium title-font mb-1">Status : {vechileClicked.status}</h2>
                    <h2 className="text-lg text-purple-500 tracking-widest font-medium title-font mb-1">Speed : {vehicleData && vehicleData.speed}</h2>
        </div>
        <div className="flex flex-row justify-around">

                    <h1 className="md:text-lg text-lg font-medium title-font mb-5 text-gray-900"> Reg No : {vechileClicked.registrationNumber}</h1>
                    <h1 className="md:text-lg text-lg font-medium title-font mb-5 text-gray-900"> Time Stamp : {vehicleData && moment(vehicleData.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</h1>
        </div>
                </div>
                <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 cursor-pointer" onClick={() => { setDetailPage(false) }}>
                </div>
      </div>
      {vehicleData && vehicleData.latitude && vehicleData.longitude ? (
        <Map
          calculatedData={[
            {
              Latitude: vehicleData.latitude,
              Longitude: vehicleData.longitude,
            },
          ]}
          lat={vehicleData.latitude}
          lng={vehicleData.longitude}
        />
      ) : (
        "No Data found. Please Try some other vehicle."
      )}
    </div>
  );
};

export default LiveMap;
