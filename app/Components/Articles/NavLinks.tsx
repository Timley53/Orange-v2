import Link from 'next/link';
import React, { useState } from 'react'

interface Props {
    reRender: string,
    setReRender :  React.Dispatch<React.SetStateAction<string>>;
    link: string,
    icon: JSX.Element,
    title: string,
    i: number
}

export default function NavLinks({setReRender, i,reRender, icon,title,link}: Props) {
 
 
    return (
    <Link onClick={()=> setReRender(link)} key={i + 1} href={link} className={`w-full p-1 flex items-center my-3  text-[17px] hover:bg-slate-200 hover:bg-opacity-70 hover:text-mainOrange rounded-md transition-all  ${reRender === link ? "bg-slate-200 text-mainOrange" : "bg-transparent"}`}>


    <span className="text-3xl mr-2">{icon}</span> 
    <span>{title}</span>
</Link>  )
}
