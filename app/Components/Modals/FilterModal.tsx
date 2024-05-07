import { FilterDateType } from '@/app/Interface';
import { filterDateType } from '@/app/expenses/page';
import React from 'react'
import { ImCross } from 'react-icons/im'
import { RxCross1 } from "react-icons/rx";

interface Props {
    Category: string[],
    showFilter: boolean
setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
filterDate:filterDateType
setFilterDate: React.Dispatch<React.SetStateAction<filterDateType>>,
currentCategory: string,
setCurCat:React.Dispatch<React.SetStateAction<string>>,
}

function FilterModal({showFilter,
    setShowFilter,
    filterDate,
    setFilterDate,Category,currentCategory,setCurCat}: Props) {


        // console.log(filterData)

  return (
    <div className='bg-black bg-opacity-40 backdrop-blur-md fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center'>


        <div className="md:min-w-[400px] md:w-[50%] sm:w-[90%] min-h-[400px] bg-white
         rounded-md p-3 ">
            <div className="header items-center flex justify-between p-2 border-b-2">
                <span>Filter</span>
                <button className='p-2 text-lg hover:text-rose-500' onClick={()=>setShowFilter(false)}><RxCross1/></button>
            </div>


            <div className="w-[100%] h-full flex flex-col items-center justify-center ">

            <select name="Category" id="" className="p-1 rounded-md border-2 m-3" onChange={(e)=>setCurCat(e.target.value)}>
            <option value="default">
                 Categories
            </option>
            {
                Category.map((cat, i)=> {
                    return (
                        <option key={i + cat} value={cat}>{cat[0]?.toUpperCase() + cat.slice(1)}</option>
                    )
                })
            }
        </select>

                <div className="from_to flex p-2 items-center ">

                    <label htmlFor="from" className='flex flex-col items-center'>
                        <span>From:</span>
                        <input type="date"  className='m-2 border-2 p-1 rounded-md'
                        onChange={(e)=> setFilterDate({
                            ...filterDate,
                            from: e.target.value
                        })}
                        
                        />
                    </label>

                    <span className='m-2'>-------</span>

                    <label htmlFor="to" className='flex flex-col items-center'>
                        <span>To:</span>
                        <input type="date" className='m-2 border-2 p-1 rounded-md' 
                          onChange={(e)=> setFilterDate({
                            ...filterDate,
                            to: e.target.value
                        })}
                        />
                    </label>


                </div>

            </div>
        
        </div>


   
    </div>
  )
}

export default FilterModal