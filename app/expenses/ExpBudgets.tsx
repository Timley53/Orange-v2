import React, { useContext, useState } from 'react'
import BudgetArticles from '../Components/Articles/BudgetArticles'
import { ExpenseContext } from '../Utils/Context'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Utils/firebase'
import EditBudgetModal from '../Components/Modals/EditBudgetModal'
import { useMutation } from '@tanstack/react-query'
import Pagination from '../Components/Pagination'

export interface EditModalPropsType {
  budgetTitle:string,
  amount: number,
  expCatId: string
}

function ExpBudgets() {

  const {CategoryDatas} = useContext(ExpenseContext)
  // const [user, authLoading, authError] = useAuthState(auth)

  // const [pending, setPending] = useState(false)


  const [showEditModal, setShowEditModal] = useState(false)
  const [editModalDetails, setEditModalDetails] = useState<EditModalPropsType>({
    budgetTitle: "",
    amount: 0,
    expCatId: ""
  })
  

  const [currentPage, setCurrentPage] = useState(1)
  const dataPerPage = 7;
  const pages = Math.ceil(CategoryDatas ? CategoryDatas.length/ dataPerPage : 0 )

  const start = (currentPage - 1) * dataPerPage
  const end = currentPage * dataPerPage

 

 


    const arr = new Array(7).fill((Math.random() + 1) *50)


  return (
    <div className='flex flex-col w-full p-2 my-6 min-h-[400px]'>
      {
       showEditModal && <EditBudgetModal showEditModal ={showEditModal}
       setShowEditModal={setShowEditModal}

       editModalDetails={editModalDetails}
       setEditModalDetails ={setEditModalDetails}
       
       />
      }
        <h2 className='text-xl mt-4 my-3'>Budgets</h2>

        <div className="data flex flex-wrap w-full ">
        {
            CategoryDatas.slice(start, end).map((cat, i) => <BudgetArticles key={i} budget={cat.budget} id={cat.id} title={cat.categoryTitle}  setShowEditModal={setShowEditModal} setEditModalDetails={setEditModalDetails}/>)

            // create edit budget function
        }
            
        </div>

        <div className="pagination h-full min-h-[6vh]  my-2">

<Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>

</div>

    </div>
  )
}

export default ExpBudgets