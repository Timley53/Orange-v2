import { HomePageContextType } from '@/app/Interface'
import { HomePageContext } from '@/app/Utils/Context';
import { Cal_Cat_total, calculate_Total_balance, filterAllExpByMonth } from '@/app/Utils/helperFxn';
import { DocumentData } from 'firebase/firestore'
import { title } from 'process';
import React, { useContext } from 'react'


// higest expense category

export function HighestExpenseCategory({} ) {
const {expensedata, incomeData} = useContext<HomePageContextType>(HomePageContext)

    const allCategoryTotal = expensedata.dataByCategory.map((expCategory) => {
      return {
        title: expCategory.categoryTitle,
        total: filterAllExpByMonth(expCategory.categoryData).reduce((acc, cur)=> acc + cur.amount, 0)
      }
    })

    const maxCategory = allCategoryTotal.reduce((prev, current) => {
      if( current.total > prev.total ) {
        return {
          ...current
        }
      }else{
        return {
          ...prev
        }
      }
    }, {
  title:"default___",
  total: 0
})


  return (
    <article className='w-1/3 min-w-[300px] max-w-[350px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
        <span>Highest overall category expense</span>

        <div className="mt-28 my-2 w-[70%] max-w-[150px] flex justify-between self-end items-center">
                  <span className='text-xs'>{maxCategory.title}: </span>
  
          <span className='text-base'>${maxCategory.total}</span>          
  </div>


    </article>
  )
}


// ==============


export const HighestExpenseThisMonth = ()=> {
  return (
    <article className='w-1/3 min-w-[250px] max-w-[250px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
        <span>Highest expense this month</span>


        <div className="mt-28 flex flex-col">
                <span className=''>Maintainance</span>

        <span className=' text-lg self-end'>$12,000</span>
        
</div>


    </article>
  )
}


export function HighestIncomeCategory({} ) {

    

    return (
      <article className='w-1/3 min-w-[250px] max-w-[250px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
          <span>Highest overall Income category</span>
  
          <div className="mt-20 my-2 w-[70%] max-w-[150px] flex justify-between self-end items-center">
                  <span className='text-xs'>Free Savings Total: </span>
  
          <span className=' text-base '>$12,000</span>          
  </div>

      </article>
    )
  }

  
export const HighestIncomeThisMonth = ()=> {

  
    return (
      <article className='w-1/3 min-w-[250px] max-w-[250px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
          <span>Highest expense this month</span>
  
  
          <div className="mt-28 flex flex-col">
                  <span className=''>Maintainance</span>
  
          <span className=' text-lg self-end'>$12,000</span>
          
  </div>
  
  
      </article>
    )
  }


  export const MonthlyBalance = ()=> {

    const {expensedata, incomeData} = useContext<HomePageContextType>(HomePageContext)


    const allExp = expensedata.dataByCategory.map(expCat => expCat.categoryData).flat()

  
      // const 
    
      const thisMonthTotalExp = filterAllExpByMonth(allExp)
    

    return (
      <article className='w-1/3 md:min-w-[300px] sm:min-w-[250px] md:max-w-[350px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
          <span className='text-sm'>Monthly Balance</span>
          <span className='text-2xl'>{ expensedata && incomeData ? (incomeData.salary + (incomeData.other.reduce((acc , cur)=> acc + cur.amount, 0))) - thisMonthTotalExp.reduce((acc, cur) => acc + cur.amount , 0)   : "0000"} </span>



  
          <div className="mt-20 my-2 w-[70%] max-w-[150px] flex justify-between self-end items-center">
                  <span className='text-xs'>Income Total: </span>
  
          <span className=' text-base '>${incomeData.salary + (incomeData.other.reduce((acc , cur)=> acc + cur.amount, 0))}</span>          
  </div>

  
  
      
  
      </article>
    )
  }
  
  

  
  

  export const MonthlyBudget = ()=> {
    const {expensedata} = useContext<HomePageContextType>(HomePageContext)

    const budgetTotal = expensedata.dataByCategory.reduce((acc, cur) => acc + cur.budget, 0)

    const TotalCategoryTotal = expensedata.dataByCategory.map((cat)=> Cal_Cat_total(cat.categoryData)).reduce((acc, cur) => acc + cur,0)

    return (
      <article className='w-1/3 min-w-[300px] max-w-[350px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
          <span className='text-sm'>Monthly Budget</span>
          <span className='text-xl'>${budgetTotal}</span>
  
  
          <div className="mt-20 my-2 w-[70%] max-w-[150px] flex justify-between self-end items-center">
                  <span className='text-xs'>Expense Total</span>
  
          <span className=' text-base '>${TotalCategoryTotal}</span>          
  </div>



  
      </article>
    )
  }
  
  
  

