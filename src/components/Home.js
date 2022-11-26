import React from 'react'

export default function Home({userData,setUserData,detailPage}) {
 const vechileUnderUser = userData && userData[0].vehicles && userData[0].vehicles.length
  return (
<div className="isolate bg-white">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
      <defs>
        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9089FC"></stop>
          <stop offset="1" stopColor="#FF80B5"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div className="px-6 pt-6 lg:px-8">
    <div>
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8" src="https://d33wubrfki0l68.cloudfront.net/bfad864aea33a259d945066bbefc38f83ff0255f/8dbcc/images/tracknerd-logo-4.png" alt=""/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>

            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Product</a>

          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Features</a>

          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Marketplace</a>

          <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">Company</a>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end " onClick={() => setUserData(null)}>
          <a href="#" className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Log out</a>
        </div>
      </nav>

    </div>
  </div>
  <main>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-5 pb-22 sm:pt-18 sm:pb-10">
        <div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
           
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Welcome to Tracknerd</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Hello {userData && userData[0].name}</p>
          </div>
       { vechileUnderUser > 0 &&   <div className='mt-2 text-center'>
            { detailPage ? <p> Click Go Back button to go to previous page </p>:<p> You have {vechileUnderUser} Under Click Below Cards to See Details :- </p>}
          </div>}
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9089FC"></stop>
                  <stop offset="1" stopColor="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

  )
}
