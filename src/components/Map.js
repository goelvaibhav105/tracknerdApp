import React from 'react'

export default function Map() {
    const lat = 0;
    const long =0 


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
