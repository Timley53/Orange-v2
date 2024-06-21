import React, { FormEvent, useContext, useState } from 'react'
import ModalBackgroundBlur from '../ModalBackgroundBlur'
import { ImCross } from 'react-icons/im'
import { EditModalPropsType } from '@/app/expenses/ExpBudgets'
import { ExpenseContext } from '@/app/Utils/Context'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, database } from '@/app/Utils/firebase'
import { useMutation } from '@tanstack/react-query'
import { ExpensePageDataType } from '@/app/Interface'
import { collection, doc, setDoc } from 'firebase/firestore'
import GeneralLoading from '../GeneralLoading'

interface Props{
    showEditModal: boolean,
setShowEditModal:React.Dispatch<React.SetStateAction<boolean>>,
editModalDetails: EditModalPropsType
setEditModalDetails:React.Dispatch<React.SetStateAction<EditModalPropsType>>

}

function EditBudgetModal({setEditModalDetails, setShowEditModal, editModalDetails}:Props) {



    const {CategoryDatas, data, refetch} = useContext(ExpenseContext)

        const [user, authLoading, authError] = useAuthState(auth)





    const [isSuccess, setIsSuccess] = useState(false)
    const [settled, setSettled] = useState(false)
    const [isError, setIsError] = useState(false)
  
    const {isPending, mutateAsync,error:MutateError, reset,  } = useMutation({ mutationFn: EditExpenseBudget, onSettled, onSuccess:onSuccess, onError: onError
      
     })

     function onSettled(){
        setSettled(true)
      }
      function onSuccess(){
        setIsSuccess(true)    }
    
    
        function onError(){
        setIsError(true)
      }
    


      async function EditExpenseBudget(){

        
      try{


        if(data){
  
          
        const newData: ExpensePageDataType =   {
          ...data,
          dataByCategory: data.dataByCategory.map((expCat) => {
            if(expCat.id === editModalDetails.expCatId){
                return {
                    ...expCat,
                    budget: +editModalDetails.amount
                }
            }else{
                return {
                    ...expCat
                }
            }
          })
          
  
        
  
        }  
  
        const docRef = doc(database,"users", user ? user.uid: "")
        const expSubColRef = collection(docRef, "expense") 
        const expSubColDocRef = doc(expSubColRef, "expenseDoc", )
        const editBudgetDOc = await setDoc(expSubColDocRef,newData)
      
  
      

  
      
      } else{
        return
      }
    }catch(err){
      throw err
    }
       

      }
    

    async function SubmitEdit(e: FormEvent){
        e.preventDefault()
       await mutateAsync()
      }




  return (
    <ModalBackgroundBlur>

        {
            isPending && <GeneralLoading/>
        }
        {
            !isPending && settled && isSuccess  && <ModalBackgroundBlur>

                <div className="bg-white w-[300px] h-[300px] flex flex-col items-center justify-center">

                    {/* <span className='text-5xl my-3'>✅</span> */}
                    <h2>Budget Successfully Edited</h2>

                    <button className='bg-emerald-300 p-3 px-4 m-3 rounded-md text-white' onClick={()=> {
                        setEditModalDetails({
                            amount: 0,
                            budgetTitle: "", 
                            expCatId: ""
                        })
                         setShowEditModal(false)
                         refetch()
                    }}>❎ Close</button>


                    
                    
                </div>

            </ModalBackgroundBlur>
        }

        {
            !isPending && isError && MutateError 
            
             && <ModalBackgroundBlur>
                
                <div className="bg-white w-[300px] h-[300px] flex flex-col items-center justify-center">

                    <span className='text-5xl my-3'>⚠️</span>
                    <h2>Error</h2>

                    <p className='text-center'>{MutateError?.message}</p>

                    <button className='bg-rose-500 p-3 px-4 m-3 rounded-md text-white' onClick={()=> {
                        setEditModalDetails({
                            amount: 0,
                            budgetTitle: "", 
                            expCatId: ""
                        })
                         setShowEditModal(false)
                         refetch()
                    }}> Close</button>


                    
                    
                </div>

            </ModalBackgroundBlur>
        }

    <form className="bg-white w-[60%] h-[50%] max-w-[500px] p-2 rounded-md" onSubmit={SubmitEdit}>
    <header className='w-full border-b-2 p-2 flex justify-between items-center'>
        <span className='text-sm'>Edit expense Category budget</span>

        <button className='text-rose-600 p-2' onClick={()=> {
            setShowEditModal(false)
            setEditModalDetails({
                amount: 0,
                budgetTitle: "", 
                expCatId: ""
            })
        }}>
            <ImCross/>
        </button>

    </header>

    <section className='flex flex-col  items-center justify-center mt-10'>
        <label htmlFor="Title" className='my-2 '>
            <span>Title:</span>
            <input type="text"  value={editModalDetails.budgetTitle} disabled className='mx-2 p-2 bg-slate-200 pl-4 ml-9 rounded-md'/>
        </label>
        <label htmlFor="amount" className='my-2 '>
            <span>Amount:</span>
            <input type="number" min={0} value={editModalDetails.amount}  onChange={(e)=>
            setEditModalDetails({
                ...editModalDetails,
                amount: +e.target.value
            })
            } className=' mx-2 p-2 bg-slate-200 pl-4 rounded-md'/>
        </label>

        <button className='bg-emerald-400 w-[40%] mx-auto mt-10 p-2  rounded-md hover:opacity-70 transition-all'> 
            Submit edit 
        </button>
    </section>
        
    </form>
    </ModalBackgroundBlur>
  )
}

export default EditBudgetModal