import React from 'react'
import CategoryArticleDel from '../Components/Articles/CategoryArticleDel'

const arr = new Array(16).fill(Math.random() * 99 + 1)


function ListAllExpenseCategory() {
  return (
    <div className='w-full p-1 '>
        <h2 className='text-xl m-3'>All Categories</h2>

        <div className="flex flex-wrap w-full">

        {
            arr.map((arr)=> <CategoryArticleDel/>)
        }
        </div>
    </div>
  )
}

export default ListAllExpenseCategory