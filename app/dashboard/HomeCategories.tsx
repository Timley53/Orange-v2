import Link from 'next/link'
import React, { useContext, useState } from 'react'
import {  } from '../Utils/helperFxn'
import HomeCategoryArticle from '../Components/Articles/HomeCategoryArticle'
import { HomePageContextType } from '../Interface'
import { DocumentData } from 'firebase/firestore'
import { FaAngleRight } from 'react-icons/fa'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { HomePageContext } from '../Utils/Context'
import Pagination from '../Components/Pagination'

// interface DataProps {expense: PageDataType | DocumentData} 

const arr = new Array(6).fill(2)


function HomeCategories({}) {
  const {expensedata, } = useContext<HomePageContextType>(HomePageContext )

  const [currentPage, setCurrentPage] = useState(1)

        
  const dataPerPage = 5;
  const pages = Math.ceil(expensedata ? expensedata.dataByCategory.length/ dataPerPage : 0 )

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage



  return (
    <div className='md:w-[30%]  border-2 h-[500px] rounded-md md:mx-1 sm:w-[95%] sm:mx-auto  p-2   sm:my-2 md:my-0'>
        <header className=' p-2 flex items-center justify-between my-1 border-b-2 '>
            <span className=''>Expense categories</span> 

            <Link href={""} className='text-lg mx-1 hover:text-orange-400 transition-all'>
            <FaArrowRightLong />        
            </Link>
        </header>
        <div className=" flex flex-col min-h-[380px] ">


{
  expensedata.dataByCategory.slice(start, end).map(category => <HomeCategoryArticle key={category.id} {...category}/>)
}
    </div>

    <div className="pagination h-full min-h-[6vh]  my-2">

<Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>

</div>


    </div>
  )
}

export default HomeCategories