import React from 'react'
import { MdSync } from 'react-icons/md'

function GeneralLoading() {
  return (
    <div className='fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md left-0 top-0 flex items-center justify-center z-[100]'>

<div className="text-center  rounded-md w-[250px] p-2 bg-white h-[100px] flex items-center justify-center text-lg">
    <span className='mx-2 text-2xl text-orange-700 rotateAni'>
    <MdSync  /> 
    </span>
 Please wait
</div>
        
    </div>
  )
}

export default GeneralLoading