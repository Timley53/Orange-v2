import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr'

function MobileAddnew() {
    const [showCreate, setCreate] = useState(false)
  return (
    <div className={` flex-col mx-3 p-2 rounded-full border-2  md:px-6 sm:px-4  md:hidden sm:flex `}>
        <button className='flex items-center' onClick={()=>setCreate(!showCreate)}> Create <FaChevronDown className='md:ml-2 sm:ml-1' /></button>

        <div className={`absolute top-16 right-4 flex flex-col z-[-1]  text-white bg-opacity-45 z-2  backdrop-blur-md rounded-md shadow-slate-300 shadow-xl   ${showCreate ? "notranslateY z-[100] " : "translateY z-[20]"} `}>

        <button  className=' flex  mb-2 p-4 px-6 border-b-2 bg-orange-400 rounded-md'><GrAdd className='mr-2'/>Expense</button>
        <button className=' flex  rounded-md p-4 px-6 bg-orange-400'><GrAdd className='mr-2 '/>Categrory</button>
        </div>

        
    </div>
  )
}

export default MobileAddnew