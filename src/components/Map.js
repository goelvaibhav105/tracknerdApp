import React, { useState,useEffect } from 'react'
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import StartFirebase from './firebase/firebase-config';


export default function Map({vechileClicked}) {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [dummyLat, setDummyLat] = useState(null);
    const [dummylong, setDummyLong] = useState(null);
    const [vehicleData, setVechileData] = useState(null);
    const db = StartFirebase();

    useEffect(() => {
        getLocation();
      }, [lat,long]);
    

    
  const getLocation = () => {

    // const dbRef = ref((db));
    const id = vechileClicked.id
    const reg = vechileClicked.registrationNumber
    console.log(`${id}-${reg}/location`,"id")
    const dbRef = ref(
      db,
      `${id}-${reg}/location`
    );


// Hardcoding  this because above dbRef for jeewan account is not working 

    const dummyRef = ref(db,'99-WB 73 E 4299/location')
    const allRef = ref(db)

    onValue(dummyRef, (snapshot) => {
      const vehicleData = snapshot.val();
      if(vehicleData){
        const { latitude, longitude } = vehicleData
        setDummyLong(longitude);
        setDummyLat(latitude);
      }

    });

    onValue(allRef, (snapshot) => {
      const vehicleData = snapshot.val();
      if(vehicleData){
        const { latitude, longitude } = vehicleData
        setLong(longitude);
        setLat(latitude);
      }

    });

  }

// Doing this as no live data in jewan 6 Vechiles 
// if jeewan or someone account has data then it will fetch there otherwise dummy

let latFinal = lat ? lat : dummyLat
let longFinal = long ? long : dummylong
const reg = vechileClicked.registrationNumber

  return (
    <div >
      {dummyLat && dummylong && <h1 className='my-3 '>This location is fetched from Vechile WB 73 E 4299 as {reg} has no data in it </h1>}
            <iframe
            id="iframeId"
            src={`https://maps.google.com/maps?q=${latFinal},${longFinal}&hl=es;&output=embed`}
            height="500px"
            width="100%"
          ></iframe>
    </div>
  )
}
