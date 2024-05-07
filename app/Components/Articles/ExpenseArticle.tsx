import { SingleEntryDataType } from '@/app/Interface'
import { ExpenseContext } from '@/app/Utils/Context'
import React, { useContext } from 'react'
import { BiBuildingHouse } from 'react-icons/bi'
import { BsFillMotherboardFill } from 'react-icons/bs'
import { FaGifts, FaInternetExplorer } from 'react-icons/fa'
import { FaMoneyBills } from 'react-icons/fa6'
import { GiAutoRepair, GiClothes } from 'react-icons/gi'
import { MdEmojiTransportation, MdOutlineDelete, MdOutlineFastfood, MdOutlineHealthAndSafety, MdPower } from 'react-icons/md'
import { RiFundsFill } from 'react-icons/ri'



export function GetIcon({type}: {type: string}){

  if(type === "clothing"){
    return(
      <GiClothes/>
      )
    }

  if(type === "utilities"){
    return(
      <MdPower/>
      )
    }
  if(type === "rent"){
    return(
      <BiBuildingHouse/>
      )
    }
  if(type === "health"){
    return(
      <MdOutlineHealthAndSafety/>
      )
    }
  if(type === "internet"){
    return(
      <FaInternetExplorer/>
      )
    }
  if(type === "gifts"){
    return(
      <FaGifts/>
      )
    }
  if(type === "food"){
    return(
      <MdOutlineFastfood/>
      )
    }
  if(type === "transport"){
    return(
      <MdEmojiTransportation/>
      )
    }
  if(type === "maintenance"){
    return(
      <GiAutoRepair/>
      )
    }
  if(type === "taxes"){
    return(
      <RiFundsFill/>
      )
    }
  if(type === "salary"){
    return(
      <FaMoneyBills/>
      )
    }
  if(type === "freelance"){
    return(
      <FaMoneyBills/>
      )
    }


    return (<BsFillMotherboardFill />)

}



function ExpenseArticle({amount,date,id,note}: SingleEntryDataType) {

  const {setShowDelete, setDeleteDetails,} = useContext(ExpenseContext)

    
  console.log(id);
  // console.log(id);
  
  return (
    <article className='justify-between shadow-xl w-full shadow-slate-300 border-2 border-slate-200 border-t-slate-100 p-2 flex min-h-14 items-center my-2'>
        <div className="details-icon flex">

        <span className='p-3 bg-emerald-300 rounded-full'>
        
          <GetIcon type={id?.split("/")[1]}/>
        
        </span>

        <div className='flex-col flex mx-3 text-sm'>
            <span className='text-sm'>{id?.split("/")[1]}</span>
            <span className='text-xs '>{date}</span>
        </div>

        </div>


        <div className='flex items-center'>
          <span className='mx-4'>
         {amount}
          </span>

          <button className='mx-3 text-lg p-4' onClick={()=> {
            setShowDelete(true)
             setDeleteDetails(id)
          }}>
        <MdOutlineDelete /> 
               </button>
          </div>

        
    </article>
  )
}

export default ExpenseArticle


