import React from 'react'

function ExpenseRange() {
  return (
    <div className='w-[80%] flex my-2 md:text-sm sm:text-base flex-wrap  '>

        <article className='mx-3 m-1 text-[#A10702]'>
            <span>Expense Total(Monthly)</span>:
            <span>#124,300</span>
        </article>

        <article className='mx-3 m-1 text-[#FAA613]'>
            <span>Highest Expense(Monthly)</span>:
            <span>#124,300</span>
        </article>

       
    </div>
  )
}

export default ExpenseRange