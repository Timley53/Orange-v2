import Link from 'next/link'
import React from 'react'
import { calculateCategoryTotal } from '../Utils/helperFxn'
import HomeCategoryArticle from '../Components/Articles/HomeCategoryArticle'
import { PageDataType } from '../Interface'
import { DocumentData } from 'firebase/firestore'
import { FaAngleRight } from 'react-icons/fa'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'

interface DataProps {expense: PageDataType | DocumentData} 


function HomeCategories({expense}:DataProps) {
  return (
    <div className='min-w-[270px] my-5 md:w-[30%] md:mx-3 border-2 rounded-md max-h-[370px] sm:w-full overflow-hidden '>
        <header className='bg-slate-300 p-2 flex items-center justify-between'>
            <span className=''>Expense categories</span> 

            <Link href={""} className='text-lg mx-1 hover:text-orange-400 transition-all'>
            <FaArrowRightLong />        
            </Link>
        </header>
        <div className="max-h-[300px] overflow-y-scroll catlist">


{
 calculateCategoryTotal(expense.dataByCategory).map((catTotal, i)=> <HomeCategoryArticle key={catTotal.total + i} {...catTotal}/>)
}
    </div>
    </div>
  )
}

export default HomeCategories