import Link from 'next/link'
import React, { useContext } from 'react'
import ExpenseArticle from '../Components/Articles/ExpenseArticle'
import {  } from '../Interface'
import { DocumentData } from 'firebase/firestore'
import { HomePageContext } from '../Utils/Context'
import { filterAllExpByDate } from '../Utils/helperFxn'


// interface DataProps {expense: PageDataType | DocumentData} 


function LastExpense({}) {

  const {expensedata} = useContext(HomePageContext)

  // expensedata



  return (
    <div className='md:w-[30%]  border-2 h-[500px] rounded-md md:mx-1 sm:w-[95%] sm:mx-auto  p-2 sm:my-2 md:my-0'>
        <header className='flex p-2 border-b-2 justify-between'>
            <span className='text-sm'>Last 5 expense</span>
            <Link href={"expense"} className='text-sm hover:text-orange-600 transition-all'>Show all</Link>
        </header>
          {
                  expensedata.dataByCategory.map(expCat => expCat.categoryData).flat().length < 1 && <div className="min-h-[200px] w-full flex items-center justify-center">
                    No Expenses
                  </div>

          }
           {
              expensedata.dataByCategory.map(expCat => expCat.categoryData).flat().length > 0 &&  
              expensedata.dataByCategory.map(expCat => expCat.categoryData).flat().slice(0, 5).map(exp => <ExpenseArticle key={exp.id} {...exp}/>)
          
          }
    </div>
  )
}

export default LastExpense