import { EditModalPropsType } from '@/app/expenses/ExpBudgets'
import React from 'react'
import { MdEdit } from 'react-icons/md'

interface Props{
  budget: number,
  id: string,
  title: string,
  setShowEditModal:React.Dispatch<React.SetStateAction<boolean>>,
  setEditModalDetails: React.Dispatch<React.SetStateAction<EditModalPropsType>>, 
}


function BudgetArticles({budget, title, id, setShowEditModal ,setEditModalDetails} : Props) {
  return (
    <div key={id} className='w-[25%] min-w-[200px] flex-shrink p-2 m-1 border-2 flex items-center  rounded-md text-sm '>
        <span className='p-3 w-[40px] h-[40px] text-center  m-1 flex items-center justify-center rounded-full mr-3 bg-emerald-100'>{title[0].toUpperCase()}</span>

        <div className="title_budget_spent flex flex-col mx-2 w-[60%]">
            <span>{title[0].toUpperCase() + title.slice(1)}</span>
            <small className="budget_exp my-2">
                {budget}
            </small>
        </div>

        <button className='text-lg text-emerald-400 p-2 ' onClick={()=> {setEditModalDetails({
amount: +budget,
budgetTitle: title,
expCatId: id
        })
        setShowEditModal(true)
      }
        
        }>
          <MdEdit/>
        </button>
        
    </div>
  )
}

export default BudgetArticles