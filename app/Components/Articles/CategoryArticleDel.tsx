import React from 'react'
import { MdDelete } from 'react-icons/md'

function CategoryArticleDel({}) {
  return (
    <div className='w-[25%] min-w-[200px] flex-shrink p-2 m-1 border-2 flex items-center justify-between  rounded-md text-sm '>
        <span className='p-3 w-[40px] h-[40px] text-center  m-1 flex items-center justify-center rounded-full bg-emerald-100'>B</span>

        <div className="title_category_spent flex flex-col mx-2">
            <span>Title</span>

            <small className="budget_exp my-2">
            
            </small>
        </div>
        

        <button className='m-2 p-2 hover:text-rose-700 text-[1rem]'>
            <MdDelete/>
        </button>
    </div>
  )
}

export default CategoryArticleDel