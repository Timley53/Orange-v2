import { GlobalContext } from '@/app/Utils/Context'
import React, { useContext } from 'react'
import { BsMenuButtonWideFill } from 'react-icons/bs'

function MenuBtn() {
    const {setShowMenu, showMenu} = useContext(GlobalContext)
  return (
    <button onClick={()=>setShowMenu(true)} className='ml-3 md:hidden mx-2 text-xl p-2'>
<BsMenuButtonWideFill />
    </button>
  )
}

export default MenuBtn