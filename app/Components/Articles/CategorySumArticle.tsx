import { CatTotalType } from '@/app/Utils/helperFxn'
import React from 'react'

function CategorySumArticle({title, total}: CatTotalType) {
  return (
    <div key={total} className='w-full flex justify-between p-2 my-3 border-b-2'>
    <span>{title}</span>

    <span>-{total}</span>
</div>  )
}

export default CategorySumArticle