import Link from 'next/link'
import React, { useContext } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HomePageContextType, TargetedPlans } from '../Interface'
import { HomePageContext } from '../Utils/Context'

const arr = new Array(6).fill(2)

function SavingsPlanList() {

  const {savingsData} = useContext<HomePageContextType>(HomePageContext)



  return (
    <div className='md:w-[30%]  border-2 h-[500px] rounded-md md:mx-1 sm:w-[95%] sm:mx-auto  p-2'>
        <div className='header flex justify-between items-center p-2 w-full border-b-2'>
            <span className='text-[.9rem]'>Savings Plan</span>

            <Link href={""} className='inline'>
            <FaArrowRightLong />        
            </Link>
        </div>


        <div className="savings_list flex flex-col items-cente h-[400px] w-full">

          {
            savingsData.targetedSavingPlan.length < 1 && <div className="w-full h-[300px] flex items-center justify-center">
              <h2 className='m-auto  '>No saving records</h2>
            </div>
          }

{
  savingsData.targetedSavingPlan.length > 0 && 
    savingsData.targetedSavingPlan.slice(0, 6).map((sv) => <HomeHistoryArticle key={sv.id} {...sv}/>)
}
        </div>
    </div>
  )
}

export default SavingsPlanList


export function HomeHistoryArticle({data, title , id,target}: TargetedPlans){
  const totalSaved = data.reduce((acc , curr) => acc + curr.amount, 0)


   return( <div key={id} className='w-full flex border-b-2  items-center my-2'>
        <span className='p-2 px-3 rounded-full  bg-emerald-300 m-2'>S</span>

        <span className=' text-[.85rem]'>{title}</span>

        <span>#{totalSaved}/#{target}</span>
    </div>
   )
}