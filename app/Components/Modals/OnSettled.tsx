import React, { useContext } from 'react'
import ErrorModal from './ErrorModal'
import SuccessModal from './SuccessModal'
import { ExpenseContext } from '@/app/Utils/Context'



function OnSettled({}) {
    const {Mutating, MutateIsError, MutateError,isSuccess, deleteModalDetails,mutateAsync,refetch, reset , setDeleteDetails,setShowDelete, setSettled,settled, 
        setMutateIsError,
        setIsSuccess } = useContext(ExpenseContext)

  return (
    <div>
         {
      MutateIsError && <ErrorModal errorMessage={MutateError?.message} setMutateIsError={setMutateIsError}/>
      
    }

{
  isSuccess && <SuccessModal setDeleteDetails={setDeleteDetails} setShowDelete={setShowDelete} refetch={refetch} reset={reset} settled={settled} setSettled={setSettled} setIsSuccess={setIsSuccess}/>
}
    </div>
  )
}

export default OnSettled