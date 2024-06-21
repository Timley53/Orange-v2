import React, { useContext, useState } from 'react'
import BudgetArticles from '../Components/Articles/BudgetArticles'
import { ExpenseContext } from '../Utils/Context'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../Utils/firebase'
import EditBudgetModal from '../Components/Modals/EditBudgetModal'
import { useMutation } from '@tanstack/react-query'

export interface EditModalPropsType {
  budgetTitle:string,
  amount: number,
  expCatId: string
}

function ExpBudgets() {

  const {CategoryDatas} = useContext(ExpenseContext)
  const [user, authLoading, authError] = useAuthState(auth)

  // const [pending, setPending] = useState(false)


  const [showEditModal, setShowEditModal] = useState(false)
  const [editModalDetails, setEditModalDetails] = useState<EditModalPropsType>({
    budgetTitle: "",
    amount: 0,
    expCatId: ""
  })
  

 

 


    const arr = new Array(7).fill((Math.random() + 1) *50)


  return (
    <div className='flex flex-col w-full p-2 my-6 '>
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
            CategoryDatas.map((cat, i) => <BudgetArticles key={i} budget={cat.budget} id={cat.id} title={cat.categoryTitle}  setShowEditModal={setShowEditModal} setEditModalDetails={setEditModalDetails}/>)

            // create edit budget function
        }
            
        </div>

    </div>
  )
}

export default ExpBudgets