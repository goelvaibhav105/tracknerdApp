import React, { useState,useEffect } from 'react'
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import StartFirebase from './firebase/firebase-config';


export default function Map({vechileClicked}) {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const db = StartFirebase();

    useEffect(() => {
        getLocation();
      }, [lat,long]);
    

    
  const getLocation = () => {

    const dbRef = ref((db));
    const id = vechileClicked.id
    const reg = vechileClicked.registrationNumber


    get(child(dbRef, `${id}-${reg}/location`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val(),"Test");
          const { latitude, longitude } = snapshot.val();
          setLong(longitude);
          setLat(latitude);
        } else {
          alert("No Live Data is there ");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (
    <div >
            <iframe
            id="iframeId"
            src={`https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`}
            height="500px"
            width="100%"
          ></iframe>
    </div>
  )
}
