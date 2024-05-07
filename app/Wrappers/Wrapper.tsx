"use client"

import React, { useEffect, useState } from 'react'
import TanstackProvider from './TanstackProvider'
import Nav from '../Components/Nav'
import { GlobalContext } from '../Utils/Context'
import { useRouter, usePathname } from 'next/navigation'
import { wrapperStyles } from '../styles'
import Offline from '../Components/Offline'
// import { pathName } from '../Interface'

function Wrapper({children}:  {
    children: React.ReactNode
  }) {
const [showMenu, setShowMenu] = useState<boolean>(false)
const [userId, setUserId] = useState("")
const [darkMode, setDarkMode] = useState(false)
const [offline, setOffline] = useState(false)
    // console.log(router.)

    const pathName = usePathname()

    const {wrapperContainer, mainWrapperDarkmode,mainWrapperGeneral} = wrapperStyles



      useEffect(()=>{

        window.addEventListener("offline", (e)=> {
setOffline(true)
        })

      }, [])

  return (
    <GlobalContext.Provider value={{showMenu, setShowMenu, userId, setUserId, darkMode, setDarkMode}}>

    <TanstackProvider>

    {
      offline && <Offline/>
    }

    <div className={wrapperContainer}>
    { pathName !== "/" && !pathName.includes("auth") &&  <Nav/>}
            <main className={mainWrapperGeneral + (darkMode && mainWrapperDarkmode )}>
            {children}
        </main>
    </div>
    </TanstackProvider>
    </GlobalContext.Provider>
  )
}

export default Wrapper