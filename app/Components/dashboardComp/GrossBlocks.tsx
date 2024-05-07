import React from 'react'
import { HighestExpenseCategory, HighestExpenseThisMonth, HighestIncomeCategory, HighestIncomeThisMonth, MonthlyBalance, MonthlyBudget } from '../Articles/Blocks'
import { PageDataType } from '@/app/Interface'
import { DocumentData } from 'firebase/firestore'

interface DashboardDataType{
    expense: PageDataType | DocumentData ,
    income: PageDataType | DocumentData,
}

function GrossBlocks({expense, income} : DashboardDataType) {

    
  return (
    <div className='w-auto  rounded-xl border-emerald-500 min-h-[190px] mb-4 overflow-x-scroll sm:mt-4 md:mt-2 flex items-center justify-start overflow-edit'>
        <MonthlyBalance/>
        <MonthlyBudget/>
        <HighestExpenseCategory expense={expense}/>
        {/* <HighestExpenseThisMonth/> */}
        <HighestIncomeCategory income={income}/>
        {/* <HighestIncomeThisMonth/> */}
       
    </div>
  )
}

export default GrossBlocks