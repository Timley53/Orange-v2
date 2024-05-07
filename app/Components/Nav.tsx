"use client"

import Link from "next/link"
// import { Router, useRouter } from "next/router"
import {  useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { MdAccountTree, MdArrowBackIos, MdArrowForwardIos, MdDashboard, MdHome, MdReceiptLong } from "react-icons/md"
import { GlobalContext } from "../Utils/Context"
import { ImCross } from "react-icons/im"
import NavLinks from "./Articles/NavLinks"
import { navStyles } from "../styles"
import LinkLists from "./Articles/LinkLists"


const NavLink = [
    {
        link: "dashboard",
        icon: <MdDashboard />,
        title: "Dashboard"
    }
    ,
    {
        link: "expenses",
        icon: <MdReceiptLong />,
        title: "Expenses"
    }
    ,
    {
        link: "categories",
        icon: <MdAccountTree />,
        title: "categories"
    }
    ,
    {
        link: "categories",
        icon: <MdAccountTree />,
        title: "categories"
    }
    ,
    {
        link: "categories",
        icon: <MdAccountTree />,
        title: "categories"
    }

]
export default function Nav() {
    const [expand, setExpand] = useState<boolean>(false)
    const [reRender, setReRender] = useState<string>("dashboard")

    const {showMenu, setShowMenu} = useContext(GlobalContext)



    console.log()
const  {navContainer, navExpandButton, navModal, mobileCancelMenuBtn, linkListUl} = navStyles

  return (
    <>
    <nav className={(`${expand ? "w-[170px] " : "w-[46px] transition-all duration-[2s] "} `) + navContainer.general }>
        <span>Orange</span>


<LinkLists expand={expand} setExpand={setExpand} setReRender={setReRender} reRender={reRender} navExpandButton={navExpandButton} linkListUl={linkListUl} NavLink={NavLink} />





    </nav>
{ showMenu && 
   <div className={navModal}>
    <nav className={navContainer.mobile}>

<button className={mobileCancelMenuBtn} onClick={()=> setShowMenu(false)}> 
    <ImCross/>
</button>

        <h2>Logo</h2>

        <LinkLists expand={expand} setExpand={setExpand} setReRender={setReRender} reRender={reRender} navExpandButton={navExpandButton} linkListUl={linkListUl} NavLink={NavLink} />


    </nav>

   </div>
}
    </>

  )
}
