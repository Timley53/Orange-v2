import { PageDataType } from '@/app/Interface'
import { calculateCategoryTotal, showMaxCat } from '@/app/Utils/helperFxn';
import { DocumentData } from 'firebase/firestore'
import React from 'react'

interface HEC {
    expense: PageDataType | DocumentData
}

interface HIC {
    income: PageDataType | DocumentData
}

export function HighestExpenseCategory({expense}:HEC ) {
console.log(expense.dataByCategory);

const totalCatArr = calculateCategoryTotal(expense.dataByCategory)
const maxObj =  showMaxCat(totalCatArr)




  return (
    <article className='w-1/3 min-w-[250px] max-w-[250px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
        <span>Highest overall category expense</span>

        <div className="mt-28 flex flex-col">
        <span className=''>{maxObj ? maxObj.title: "No data"}</span>


        <span className=' text-lg self-end'>{maxObj ? maxObj.total: "No data"}</span>
        
</div>

    </article>
  )
}



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


export function HighestIncomeCategory({income} :HIC) {

    
const totalCatArr = calculateCategoryTotal(income.dataByCategory)
const maxObj =  showMaxCat(totalCatArr)






    return (
      <article className='w-1/3 min-w-[250px] max-w-[250px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
          <span>Highest overall Income category</span>
  
          <div className="mt-28 flex flex-col">
        <span className=''>{maxObj ? maxObj.title: "No data"}</span>


        <span className=' text-lg self-end'>{maxObj ? maxObj.total: "No data"}</span>
        
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
    return (
      <article className='w-1/3 min-w-[250px] max-w-[250px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
          <span className='text-sm'>Monthly Balance</span>
          <span className='text-2xl'> $11,831</span>



  
          <div className="mt-20 my-2  flex justify-between">
                  <span className='text-xs'>Income Total</span>
  
          <span className=' text-base '>$12,000</span>          
  </div>

  
  
      
  
      </article>
    )
  }
  
  
  
  
  
  

  export const MonthlyBudget = ()=> {
    return (
      <article className='w-1/3 min-w-[250px] max-w-[250px] min-h-[170px] shrink-0 my-auto border-2 border-red-500 mx-3 high-cat rounded-3xl flex flex-col p-3'>
          <span className='text-sm'>Monthly Budget</span>
          <span className='text-xl'>$10,100</span>
  
  
          <div className="mt-20 my-2  flex justify-between">
                  <span className='text-xs'>Expense Total</span>
  
          <span className=' text-base '>$12,000</span>          
  </div>



  
      </article>
    )
  }
  
  
  

