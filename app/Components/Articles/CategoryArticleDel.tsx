import { ExpensePageDataCategoryType } from '@/app/Interface'
import { catDelDetailsType } from '@/app/expenses/ListAllExpenseCategory'
import React from 'react'
import { MdDelete } from 'react-icons/md'

interface Props {
  showDelete: boolean,
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
  ,
  setCatDelDetails: React.Dispatch<React.SetStateAction<catDelDetailsType>>
  ,
  catDelDetails: catDelDetailsType,
}


function CategoryArticleDel({id, budget,categoryData,categoryTitle, setCatDelDetails,setShowDelete}: ExpensePageDataCategoryType & Props) {
  return (
    <div key={id} className='w-[25%] min-w-[200px] flex-shrink p-2 m-1 border-2 flex items-center justify-between  rounded-md text-sm '>
        <span className='p-3 w-[40px] h-[40px] text-center  m-1 flex items-center justify-center rounded-full bg-emerald-100'>{categoryTitle[0].toUpperCase()}</span>

        <div className="title_category_spent flex flex-col mx-2">
            <span>{categoryTitle}</span>

            <small className="budget_exp my-2">
            
            </small>
        </div>
        

        <button className='m-2 p-2 hover:text-rose-700 text-[1rem]' onClick={()=> {
          setShowDelete(true)
          setCatDelDetails({
            id: id,
            title: categoryTitle
          })

        }}>
            <MdDelete/>
        </button>
    </div>
  )
}

export default CategoryArticleDel