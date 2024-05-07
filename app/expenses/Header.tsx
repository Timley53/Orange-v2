import Link from 'next/link'
import React, { useContext } from 'react'
import { MdAdd, MdMenu } from 'react-icons/md'
import MobileAddnew from './MobileAddnew'
import { FaCalculator, FaFilter } from 'react-icons/fa'
import { BsMenuButtonWideFill } from 'react-icons/bs'
import { GlobalContext } from '../Utils/Context'

interface Props {
    categoryList: string[],
    currentCategory: string,
    setCurCat:React.Dispatch<React.SetStateAction<string>>,
    showTotal: boolean,
    setShowTotal:React.Dispatch<React.SetStateAction<boolean>>
   
}

function Header({categoryList, currentCategory, setCurCat,showTotal, setShowTotal,}: Props) {
    console.log(categoryList)


    const {setShowMenu, showMenu}  = useContext(GlobalContext)

  return (
    <header className='flex pt-3 items-center px-3 z-[50]  border-2 sm:p-2 sm:px-1 sm:w-full  bg-white bg-opacity-25 backdrop-blur-md sticky top-0 justify-between '>

        <div className="head_category flex items-center">
        <span className='md:inline sm:hidden'>Expense</span>
        <select name="Category" id="" className='md:mx-5 sm:mx-1 bg-transparent border-2 p-1 px-3 text-[1rem] rounded-md self-start shadow-md md:w-auto sm:w-[95%]' value={currentCategory} onChange={(e)=>setCurCat(e.target.value)}>
            <option value="default">
                 Categories
            </option>
            {
                categoryList.map((cat, i)=> {
                    return (
                        <option key={i + cat} value={cat}>{cat[0]?.toUpperCase() + cat.slice(1)}</option>
                    )
                })
            }
        </select>

        
        </div>

    
<div className="creatnew_btn flex">
    
<button className=' mx-2 p-2 px-3 bg-[#688E26] text-white rounded-full text-sm md:flex sm:hidden'>
            <span>Create category</span> 

            <MdAdd className='text-xl'/>
        </button>
            <Link href={""} className='bg-[#550527] text-white rounded-full text-sm  mx-2 p-2 px-3 md:flex sm:hidden' >
            <MdAdd className='text-xl'/>
                <span> New expense</span>
            </Link>

</div>
<MobileAddnew/>

<button onClick={()=> setShowTotal(!showTotal)} className='text-3xl p-2  right-4 px-2 rounded-md   z-10 md:hidden sm:flex'>
      <FaCalculator/>
     </button>

     <button className='text-3xl p-1 px-3 mx-2 text-mainOrange md:hidden' onClick={()=>setShowMenu(!showMenu)}>
     <BsMenuButtonWideFill />  
        </button>
        
    </header>
  )
}

export default Header