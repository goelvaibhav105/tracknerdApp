import React from 'react'

export default function VechileCards({ userData }) {
    console.log(userData,"userData")
    return (
        <section className="text-gray-600 body-font">
                    <div className="container px-5 py-2 mx-auto">
                        <div className="flex flex-wrap -m-4">
                        {userData && userData[0].vehicles && userData[0].vehicles.map((vechile) => {
                return (
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-10 rounded-lg overflow-hidden text-center relative" >
                                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-800 mb-1">Vechile ID : {vechile.id}</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Registration No. : {vechile.registrationNumber}</h1>
                                    <p className="leading-relaxed mb-3">Type : {vechile.type}</p>
                                    {vechile.status === 'Online' ? 
                                       <p className="leading-relaxed mb-3 text-green-700  font-bold">Status : {vechile.status}</p>:
                                       <p className="leading-relaxed mb-3 text-red-700 font-bold">Status : {vechile.status}</p>

                                    }
                             
                                </div>
                            </div>
                             )
                            })}
                        </div>
                    </div>
               

        </section>
    )
}
