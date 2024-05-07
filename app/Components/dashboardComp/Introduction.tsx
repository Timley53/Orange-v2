import React from 'react'
import GotoSettings from '../Articles/GotoSettings'
import Darkmode from '../Buttons/Darkmode'
import MenuBtn from '../Buttons/MenuBtn'

export default function Introduction({username}: {username: string}) {
  return (
    <div className='w-full p-2 flex justify-between items-center'>
      <h2 className='ml-2'>Hello, {username ? username : <GotoSettings/>}</h2>

      <div className="menu-dark">
        <Darkmode/>

        <MenuBtn/>
      </div>
        
    </div>
  )
}
