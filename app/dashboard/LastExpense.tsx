import Link from 'next/link'
import React from 'react'
import ExpenseArticle from '../Components/Articles/ExpenseArticle'
import { PageDataType } from '../Interface'
import { DocumentData } from 'firebase/firestore'


interface DataProps {expense: PageDataType | DocumentData} 


function LastExpense({expense}: DataProps) {
  return (
    <div className='md:w-[30%] min-w-[250px] border-2 min-h-[320px] rounded-md md:mx-3 sm:w-full sm:mx-auto sm:my-3'>
        <header className='flex p-2 bg-slate-200 justify-between'>
            <span className='text-sm'>Last 5 expense</span>
            <Link href={"expense"} className='text-sm hover:text-orange-600 transition-all'>Show all</Link>
        </header>
          {
            // expense.dataByCategory
              // <ExpenseArticle/>
          
          }
    </div>
  )
}

export default LastExpense