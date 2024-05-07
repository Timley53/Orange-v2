import { MyGlobalContextType } from '@/app/Interface'
import { GlobalContext } from '@/app/Utils/Context'
import React, { useContext } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

function Darkmode() {
    const {darkMode, setDarkMode} = useContext<MyGlobalContextType>(GlobalContext)
  return (

    <button onClick={()=>setDarkMode(!darkMode)} className='text-2xl p-2'>

        {
            darkMode && <MdDarkMode /> || <MdOutlineDarkMode />
        }

    </button>
        )
}

export default Darkmode