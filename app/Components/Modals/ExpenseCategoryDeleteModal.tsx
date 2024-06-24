import React, { useContext, useState } from 'react'
import ModalBackgroundBlur from '../ModalBackgroundBlur'
import { catDelDetailsType } from '@/app/expenses/ListAllExpenseCategory'
import { ExpenseContext } from '@/app/Utils/Context'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, database } from '@/app/Utils/firebase'
import { useMutation } from '@tanstack/react-query'
import { ExpensePageDataType, expenseDefaultCat } from '@/app/Interface'
import { collection, doc, setDoc } from 'firebase/firestore'
import GeneralLoading from '../GeneralLoading'

interface Props {
    showDelete: boolean,
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
    ,
    setCatDelDetails: React.Dispatch<React.SetStateAction<catDelDetailsType>>
    ,
    catDelDetails: catDelDetailsType,
}

function ExpenseCategoryDeleteModal({catDelDetails,setCatDelDetails,setShowDelete,showDelete}: Props) {



  // =================


  const { data, refetch} = useContext(ExpenseContext)

  const [user] = useAuthState(auth)



const [isDefault, setIsDefault] = useState(false)

const [isSuccess, setIsSuccess] = useState(false)
const [settled, setSettled] = useState(false)
const [isError, setIsError] = useState(false)

const {isPending, mutateAsync,error:MutateError, reset,  } = useMutation({ mutationFn: CategoryDeleteFxn, onSettled, onSuccess:onSuccess, onError: onError

})

function onSettled(){
  setSettled(true)
}
function onSuccess(){
  setIsSuccess(true)    }


  function onError(){
  setIsError(true)
}



async function CategoryDeleteFxn(){

  
  
  try{
    
  

  if(data){

    
  const newData: ExpensePageDataType =   {
    ...data,
    dataByCategory: data.dataByCategory.filter( cat => cat.id !== catDelDetails.id)
  }  

  const docRef = doc(database,"users", user ? user.uid: "")
  const expSubColRef = collection(docRef, "expense") 
  const expSubColDocRef = doc(expSubColRef, "expenseDoc", )
  const deleteCategoryDoc = await setDoc(expSubColDocRef,newData)






} else{
  return
}
}catch(err){
throw err
}
 

}














  // =================


    
  return (



      <ModalBackgroundBlur>

        {
        isDefault &&  <ModalBackgroundBlur>

          <div className="w-[200px] h-[200px] flex justify-center items-center bg-white flex-col text-center">
            <h3>You can not delete a default category</h3>

            <button className='p-3 px-5 bg-mainOrange rounded-md my-4' onClick={()=>{
               setCatDelDetails({
                id: "",
                title: ""
              })
              setShowDelete(false)
              setIsDefault(false)
             refetch()
            }}>
              Ok
            </button>
          </div>

          </ModalBackgroundBlur>
        }
            {
            isPending && <GeneralLoading/>
        }

{
            !isPending && settled && isSuccess  && <ModalBackgroundBlur>

                <div className="bg-white w-[300px] h-[300px] flex flex-col items-center justify-center">

                    {/* <span className='text-5xl my-3'>✅</span> */}
                    <h2>Category Successfully deleted</h2>

                    <button className='bg-emerald-300 p-3 px-4 m-3 rounded-md text-white' onClick={()=> {
                          setCatDelDetails({
                            id: "",
                            title: ""
                          })
                          setShowDelete(false)
                         refetch()
                    }}>❎ Close</button>


                    
                    
                </div>

            </ModalBackgroundBlur>
        }

{
            !isPending && isError && MutateError 
            
             && <ModalBackgroundBlur>
                
                <div className="bg-white w-[300px] h-[300px] flex flex-col items-center justify-center">

                    <span className='text-5xl my-3 w-full'>⚠️</span>
                    <h2>Error</h2>

                    <p className='text-center'>There is an error: {MutateError?.message}</p>

                    <button className='bg-rose-500 p-3 px-4 m-3 rounded-md text-white' onClick={()=> {
                        setCatDelDetails({
                          id: "",
                          title: ""
                        })
                        setShowDelete(false)
                       refetch()
                    }}> Close</button>


                    
                    
                </div>

            </ModalBackgroundBlur>
        }



                    <div className='w-[50%] max-w-[400px] bg-white h-[400px] flex justify-center items-center flex-col'>

                      <h2>Are you sure you want to delete {catDelDetails.title[0].toUpperCase() + catDelDetails.title.slice(1)}?</h2>

                      <div className="flex w-[80%] justify-around my-6">
                        <button className='p-3 px-5 rounded-md hover:opacity-80 transition-all bg-red-500' onClick={()=>{

                          setCatDelDetails({
                            id: "",
                            title: ""
                          })
                          setShowDelete(false)

                        }}>No</button>
                        <button className='p-3 px-5 rounded-md hover:opacity-80 transition-all bg-green-500' onClick={async ()=>{
  const hasDefault = expenseDefaultCat.some(cat => cat == catDelDetails.title)
  
  if(hasDefault){


      setIsDefault(true)
    return
  }

                         await mutateAsync()
                        }}>Yes</button>
                      </div>

                    </div>
        </ModalBackgroundBlur>
  )
}

export default ExpenseCategoryDeleteModal