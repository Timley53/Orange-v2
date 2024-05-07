import React from 'react'
import { noData } from '../Utils/assets'
import Image from 'next/image'

function Offline() {
  return (
    <div className='fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md left-0 top-0 flex items-center justify-center z-[100]'>

    <div className="text-center  rounded-md w-[80%] max-w-[300px] p-6 bg-white max-h-[300px] flex flex-col items-center justify-center text-lg">
        <span className='my-4'>
        <Image src={noData} alt='imge' className='w-[100px] h-[100px]'></Image>
        </span>
<h3>     Your are offline, please try connecting to internet and reload page
</h3>
    </div>
            
        </div>
  )
}

export default Offline