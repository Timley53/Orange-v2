import { DeleteModalDetailsType, ExpenseDeleModalType } from '@/app/Interface'
import { ExpenseContext } from '@/app/Utils/Context'
import React, { useContext, useState } from 'react'
import GeneralLoading from '../GeneralLoading'
import ErrorModal from './ErrorModal'
import SuccessModal from './SuccessModal'
import OnSettled from './OnSettled'

interface Props {
    showDelete:boolean,
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>,
    deleteModalDetails:DeleteModalDetailsType 
    setDeleteDetails  :React.Dispatch<React.SetStateAction<DeleteModalDetailsType>> ,
    
}



function DeleteModal({setDeleteDetails,setShowDelete,showDelete}: Props) {
    const {Mutating, MutateIsError,isSuccess, deleteModalDetails,mutateAsync,refetch, reset, settled } = useContext(ExpenseContext)


   async function deleteFxn(){
      if(deleteModalDetails.type === "deleteExp"){
        await mutateAsync(deleteModalDetails.id , {

        })

      } else if(deleteModalDetails.type === "deleteCat"){
        
      }
    }


  return (
    <div className='fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md left-0 top-0 flex items-center justify-center z-[100]'>

  {
    !isSuccess && !MutateIsError &&  <div className="ays w-[60%] max-w-[300px] h-[150px] bg-white flex flex-col items-center p-3 rounded-lg">

    <h2>Are you sure?</h2>

    <div className="flex justify-between p-2 w-full my-6">
      <button
       onClick={()=> { 
        setDeleteDetails({
          id: "",
          type: ""
        })
        setShowDelete(false)
      }}
      className='p-3 bg-emerald-600 text-white rounded-2xl px-6'>No</button>
      <button className='p-3  px-6 rounded-2xl text-white bg-rose-500' onClick={  ()=> { 
        deleteFxn()
     }}>Yes</button>
    </div>
    </div>
  }


    {
      Mutating && <GeneralLoading/>
    }

  {
    settled && <OnSettled />
  }

   


      
    </div>
  )
}

export default DeleteModal