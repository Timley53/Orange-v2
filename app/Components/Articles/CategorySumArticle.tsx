import { ExpensePageDataCategoryType } from '@/app/Interface'
import { Cal_Cat_total } from '@/app/Utils/helperFxn'
import React from 'react'

function CategorySumArticle({categoryData, categoryTitle,id}: ExpensePageDataCategoryType) {
  return (
    <div key={id} className='w-full flex justify-between p-2 my-3 border-b-2'>
    <span>{categoryTitle}</span>

    <span>-{Cal_Cat_total(categoryData)}</span>
</div>  )
}

export default CategorySumArticle