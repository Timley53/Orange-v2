"use client"


import React, { FormEvent, useContext, useState } from 'react'
import ExpenseArticle from '../Components/Articles/ExpenseArticle'
import Pagination from '../Components/Pagination';
import { ExpenseContextType } from '../Interface';
import useHistoryState from '../Hooks';
import { FaFilter, FaLongArrowAltRight } from 'react-icons/fa';
import { isAfter, isEqual } from 'date-fns';
import {  } from '../Utils/helperFxn';
import { collection } from 'firebase/firestore';
import NoDataRecord from '../Components/NoDataRecord';
import { ExpenseContext } from '../Utils/Context';

const expenseArrDum = new Array(40).fill(Math.random())

interface Props{
  // expenseArr: SingleEntryDataType[] | undefined,
  
}

// const 

function ExpHistory({} :Props ) {
    const [currentPage, setCurrentPage] = useState(1)
    const [showFilter, setShowFilter] = useState(false)
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    // const[historyArray, setHistory] = useState(expenseArr) 
     const {CategoryDatas, currentCategory} = useContext<ExpenseContextType>(ExpenseContext)

  const chooseCurrentCategory =  currentCategory === "default" ? CategoryDatas.map(expCat => expCat.categoryData).flat() : CategoryDatas.filter(expCat => expCat.categoryTitle === currentCategory).map(expCat => expCat.categoryData ).flat()      

  //filter the data to current date first and oldest date last


  const dataPerPage = 6;
  const pages = Math.ceil(CategoryDatas ? chooseCurrentCategory.length / dataPerPage : 0  )

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage

console.log(to, from)
console.log(isEqual(to, from))
  const submitDateForm = (e:FormEvent)=> {
    e.preventDefault()

  }



  return (
        <div className="history w-full h-full flex flex-col shadow-slate-300  w-min-[200px] md:max-w-[400px] sm:max-w-auto p-2  mx-auto min-h-[75vh] ">
          <div className="flex w-full items-center ">
          {showFilter &&
            <form onSubmit={submitDateForm} className="w-full flex items-center text-sm bg-slate-200 sm:flex-wrap sm:justify-center md:justify-between  p-1 rounded-md">

              from: <input type="date" name="" id=""  className='bg-transparent  ' value={from} onChange={(e)=>setFrom(e.target.value)} required/> -- to 
              <input type="date" name="" value={to} id="" className='bg-transparent '  onChange={(e)=>setTo((e.target.value))} required/>
              
               <button className='p-1 px-4 bg-black hover:bg-new text-white text-[1rem] rounded-md m-3'><FaLongArrowAltRight /></button>
            </form>
            }

 <button className='mx-2 p-2 self-end  m-auto' onClick={()=>setShowFilter(!showFilter)}><FaFilter /></button>
          </div>
    <div className="history-article min-h-[60vh]  border-red-300">
   {
    CategoryDatas && chooseCurrentCategory.length > 0 &&
    chooseCurrentCategory.slice(start, end).map((exp)=> <ExpenseArticle {...exp} key={exp.id }
    />) 
   }


   {
    CategoryDatas && chooseCurrentCategory.length < 1 && <NoDataRecord/>
   }
    </div>

    <div className="pagination h-full min-h-[8vh] my-2">

        <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>
        
    </div>
    
</div>
  )
}

export default ExpHistory