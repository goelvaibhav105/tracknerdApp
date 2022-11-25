import React from 'react'

export default function VechileDetailPage({vechileClicked,setDetailPage}) {

  return (

<section className="text-gray-600 body-font">
  <div className="container px-40 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
    <h2 className="text-sm text-purple-500 tracking-widest font-medium title-font mb-5">Details of the vehicle is under : </h2>
      <h2 className="text-lg text-purple-500 tracking-widest font-medium title-font mb-1">{vechileClicked.status}</h2>
      <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900"> {vechileClicked.registrationNumber}</h1>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 cursor-pointer" onClick={()=>{setDetailPage(false)}}>
   
   
   
    </div>
    
  </div>
  <div className='text-center justify-center absolute top-40 left-10'>
  <button className="bg-gray-100 inline-flex  py-3 px-5 rounded-lg items-center cursor-pointer hover:bg-gray-200 focus:outline-none" onClick={()=>{setDetailPage(false)}}>
       
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-sm text-purple-600 mb-1">Go Back</span>
          <span className="title-font text-purple-800 font-medium">to Home</span>
        </span>
      </button>
      </div>
  
</section>

  )
}
