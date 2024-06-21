import React, { useContext } from 'react'
import { HighestExpenseCategory, HighestExpenseThisMonth, HighestIncomeCategory, HighestIncomeThisMonth, MonthlyBalance, MonthlyBudget } from '../Articles/Blocks'
import {  } from '@/app/Interface'
import { DocumentData } from 'firebase/firestore'
import { HomePageContext } from '@/app/Utils/Context'

// interface DashboardDataType{
//     expense: PageDataType | DocumentData ,
//     income: PageDataType | DocumentData,
// }

function GrossBlocks({ } ) {


    
  return (
    <div className='w-auto  rounded-xl border-emerald-500 min-h-[190px] mb-4 overflow-x-scroll sm:mt-4 md:mt-2 flex items-center justify-start overflow-edit'>
        <MonthlyBalance/>
        <MonthlyBudget/>
        <HighestExpenseCategory />
        {/* <HighestExpenseThisMonth/> */}
        <HighestIncomeCategory />
        {/* <HighestIncomeThisMonth/> */}
    </div>
  )
}

export default GrossBlocks