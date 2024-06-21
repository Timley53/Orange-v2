import React, { useContext, useState } from 'react'
import { ImCross } from 'react-icons/im'
import CategorySumArticle from '../Components/Articles/CategorySumArticle'
import Pagination from '../Components/Pagination'
import { Cal_Cat_total } from '../Utils/helperFxn'
import { ExpenseContextType } from '../Interface'
import { ExpenseContext } from '../Utils/Context'

const newArr = new Array(16).fill(Math.random())

interface Props {
    showTotal: boolean
    ,setShowTotal:React.Dispatch<React.SetStateAction<boolean>>,


}

function SumTotals({showTotal, setShowTotal}: Props) {


    const [currentPage, setCurrentPage] = useState(1)

    const {CategoryDatas} = useContext<ExpenseContextType>(ExpenseContext)

    // CategoryDatas
        
    const dataPerPage = 7;
    const pages = Math.ceil(CategoryDatas ? CategoryDatas.length/ dataPerPage : 0 )
  
    const start = (currentPage - 1) * dataPerPage
    const end = currentPage * dataPerPage
  


  return (
    <section className={` shadow-xl h-[90vh]  w-full md:max-w-[250px] 
    md:min-w-[25%] my-2 p-2 md:sticky md:right-0 md:top-14 sm:fixed   ${showTotal ? "block" : "md:block sm:hidden "} bg-white`} >



    <div className="sums border-b-2 min-h-[85%] ">

        <header className='text-center my-2'>
            <h2>Category Totals</h2>
        </header>

        <div className=" flex flex-col h-[70%] min-h-[460px] w-full ">

            {
                CategoryDatas && CategoryDatas.slice(start, end).map((category) => <CategorySumArticle key={category.id } {...category}/> )
            }

        </div>

      
    <div className="pagination h-full min-h-[6vh]  my-2">

<Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>

</div>

    </div>

    <div className="total  pt-4 text-sm flex justify-between p-1">
<span>Total</span>
<span>{CategoryDatas.reduce((acc, cur)=> acc + Cal_Cat_total(cur.categoryData), 0)}</span>
    </div>

    <div className="w-full  items-center justify-center p-2 md:hidden sm:flex ">


    <button onClick={()=> setShowTotal(false)} className=' m-2  text-slate-500 p-1  rounded-md text-center'>
    <ImCross/>
 </button>
    </div>
        

    </section>
  )
}

export default SumTotals