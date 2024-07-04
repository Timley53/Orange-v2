import React, { useContext } from 'react'
import { ExpenseContext } from '../Utils/Context'
import { filterAllExpByMonth } from '../Utils/helperFxn'
import { isAfter } from 'date-fns';

function ExpenseRange() {

  const {data} = useContext(ExpenseContext)

  const MonthlyExpenseTotal = filterAllExpByMonth(data.dataByCategory.map(catData => catData.categoryData).flat(1)
).reduce((acc, curr)=> acc + curr.amount ,0)

const MonthlyExpenseMax = filterAllExpByMonth(data.dataByCategory.map(catData => catData.categoryData).flat(1)
).reduce((acc, curr)=> {
  if(curr.amount > acc.amount){
    return {...curr}
  } else{
    return {
      ...acc
    }
  }
} ,{
  amount: 0,
  id: "",
  date: "",
  note: "",
})



  return (
    <div className='w-[90%]  flex flex-col my-2 mt-5 md:text-sm sm:text-base flex-wrap'>

        <article className='mx-3 m-1  flex w-full justify-between'>
            <span>Expense Total(Monthly)</span>
            <span>-{MonthlyExpenseTotal}</span>
        </article>

        <article className='mx-3  m-1 my-5  flex w-full justify-between'>
            <span>Highest Expense(Monthly)</span>
            <div className='flex flex-col items-center'>
              <span>{MonthlyExpenseMax.amount}</span>
              <small className='text-mainOrange'>{MonthlyExpenseMax.id.split("/")[1]}</small>
            </div>
        </article>

       
    </div>
  )
}

export default ExpenseRange