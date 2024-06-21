import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import {  } from '../Utils/helperFxn'
import HomeCategoryArticle from '../Components/Articles/HomeCategoryArticle'
import {  } from '../Interface'
import { DocumentData } from 'firebase/firestore'

// interface DataProps {Income: PageDataType | DocumentData} 



function IncomeCategory({}) {
  return (
    <div className='min-w-[270px] my-5 md:w-[30%] md:mx-3 border-2 rounded-md h-[370px] sm:w-full overflow-hidden'>
    <header className='bg-slate-300 p-2 flex items-center justify-between'>
        <span className=''>Income </span> 

        <Link href={""} className='text-lg mx-1 hover:text-orange-400 transition-all'>
        <FaArrowRightLong />        
        </Link>
    </header>
    <div className="max-h-[300px] overflow-y-scroll catlist">
        
{
// calculateCategoryTotal(Income.dataByCategory).map((catTotal, i)=> <HomeCategoryArticle key={catTotal.total + i} {...catTotal}/>)
}

</div>
</div>
  )
}

export default IncomeCategory