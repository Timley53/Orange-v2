import React, { useContext, useState } from 'react'
import CategoryArticleDel from '../Components/Articles/CategoryArticleDel'
import { ExpenseContext } from '../Utils/Context'
import ExpenseCategoryDeleteModal from '../Components/Modals/ExpenseCategoryDeleteModal'
import Pagination from '../Components/Pagination'

const arr = new Array(16).fill(Math.random() * 99 + 1)

export interface catDelDetailsType {
  id: string,
  title: string
} 

function ListAllExpenseCategory() {
  const {CategoryDatas} = useContext(ExpenseContext)

  const [showDelete, setShowDelete] = useState(false)
  
  
  const [catDelDetails, setCatDelDetails] = useState<catDelDetailsType>({
    id: "",
    title: ""
  })
  
  
  
  
  const [currentPage, setCurrentPage] = useState(1)
  const dataPerPage = 7;
  const pages = Math.ceil(CategoryDatas ? CategoryDatas.length/ dataPerPage : 0 )

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage

    

  return (
    <div className='w-full p-1  min-h-[400px]'>
      {showDelete && <ExpenseCategoryDeleteModal catDelDetails={catDelDetails} setCatDelDetails ={setCatDelDetails} showDelete={showDelete} setShowDelete={setShowDelete}/>}

        <h2 className='text-xl m-3'>All Categories</h2>

        <div className="flex flex-wrap w-full">

        {
            CategoryDatas.slice(start, end).map((categoryD)=> <CategoryArticleDel key={categoryD.id}  catDelDetails={catDelDetails} setCatDelDetails ={setCatDelDetails} showDelete={showDelete} setShowDelete={setShowDelete}  {...categoryD}/>)
        }
        </div>
        <div className="pagination h-full min-h-[6vh]  my-2">

<Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>

</div>
    </div>
  )
}

export default ListAllExpenseCategory