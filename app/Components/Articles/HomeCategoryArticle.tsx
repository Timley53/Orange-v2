import React from 'react'
import { GetIcon } from './ExpenseArticle'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { ExpensePageDataCategoryType } from '@/app/Interface'
import { Cal_Cat_total } from '@/app/Utils/helperFxn'

function HomeCategoryArticle({budget, categoryData, categoryTitle,id}: ExpensePageDataCategoryType) {
  
  return (
    <article key={id} className='flex w-full p-2 items-center my-1'>
        <span className='text-xl mr-2 bg-rose-400 p-3 rounded-full '>
           <GetIcon type={categoryTitle}/>
        </span>

        <div className="ml-2 flex my-1 flex-col w-full">
            <span>{categoryTitle}</span>
        </div>

        <small className='self-end my-auto'>${Cal_Cat_total(categoryData)}/${budget}</small>

    </article>
  )
}

export default HomeCategoryArticle