import React, { Dispatch } from 'react'
import NavLinks from './NavLinks'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { IconType } from 'react-icons'


export interface LinkType {
    link: string,
    icon: JSX.Element,
    title: string
}

interface Props {
    expand: boolean,
    reRender: string,
    setExpand: React.Dispatch<React.SetStateAction<boolean>>,
    setReRender:React.Dispatch<React.SetStateAction<string>>,
    NavLink: LinkType[],
    navExpandButton: string,
    linkListUl: string
}

function LinkLists({expand, NavLink,navExpandButton, setExpand,reRender, setReRender, linkListUl}: Props) {
  return (

<ul className={linkListUl}> 

<button className= {navExpandButton} onClick={()=> setExpand(!expand)}>
{ !expand && <MdArrowForwardIos /> || <MdArrowBackIos />}
</button>
    {
        NavLink.map((links, i) => {
            return(
                <NavLinks key={i +1} setReRender={setReRender} reRender={reRender} i={i} {...links}/> 
            )
        })
    }
</ul>  )
}

export default LinkLists