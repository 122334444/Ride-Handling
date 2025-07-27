import React from 'react'

const WaitingForDriver = () => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => props.setVehiclePanel(false)}>
            <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>
            </h5>
            <div className='flex item-center justify-between'>
                <img className='h-12 ' src='https://www.shutterstock.com/image-illustration/realistic-sport-car-isolated-on-600nw-2505680187.jpg' alt=""/>
                <div>
                  <h2 className='text-lg font-medium'>Vikrant</h2>
                  <h4 className='text-xl font-semibold'>UP 61 P 1947</h4>
                  <p className='font-sm text-gray-600'>BMW</p>
                </div>
            </div>

       <div className='flex justify-between flex-col items-center'>
            <img className='h-20 ' src='https://www.shutterstock.com/image-illustration/realistic-sport-car-isolated-on-600nw-2505680187.jpg' alt=""/>
            <div className='w-full'>
                <div className='flex items-center gap-5 p-2'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600 '>Sector 62, Noida</p>

                    </div>
                </div>
                <div>
                <div className='flex items-center gap-5 p-2'>
                <i className="ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600 '>Sector 62, Noida</p>

                    </div>
                </div>
                </div>
                <div>
                <div className='flex items-center gap-5 p-2'>
                <i className="ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>$2.37</h3>
                        <p className='text-sm -mt-1 text-gray-600 '>Cash Cash</p>

                    </div>
                </div>
                </div>
            </div>
            
       </div>
    </div>
  )
}

export default WaitingForDriver

