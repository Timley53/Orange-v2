import { CatTotalType } from '@/app/Utils/helperFxn'
import React from 'react'
import { GetIcon } from './ExpenseArticle'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'

function HomeCategoryArticle({title, total}:CatTotalType) {
  return (
    <article className='flex w-full p-2 border-b-2  items-center'>
        <span className='text-xl mr-2 bg-rose-400 p-3 rounded-full '>
           <GetIcon type={title}/>
        </span>

        <div className="ml-2 flex my-1 flex-col w-full">
            <span>{title[0].toUpperCase() + title.slice(1)}</span>
        <small>{total}</small>
        </div>
    </article>
  )
}

export default HomeCategoryArticle