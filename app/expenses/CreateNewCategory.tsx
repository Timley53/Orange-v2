import React, { FormEvent, useContext, useState } from 'react'
import ModalBackgroundBlur from '../Components/ModalBackgroundBlur'
import { ImCross } from 'react-icons/im'
import { ExpenseContext } from '../Utils/Context'
import { ExpensePageDataType } from '../Interface'
import { useMutation } from '@tanstack/react-query'
import generateUniqueId from 'generate-unique-id'
import { collection, doc, setDoc } from 'firebase/firestore'
import { auth, database } from '../Utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import GeneralLoading from '../Components/GeneralLoading'

function CreateNewCategory() {
        const [nameExists, setNameExists] = useState(false)
        const [newTitle, setNewTitle] = useState("")
        const [newBudget, setNewBudget] = useState(0)
        const [user, authLoading, authError] = useAuthState(auth)



const {CategoryDatas, data,setCreateNewCat, refetch} = useContext(ExpenseContext)



// ==========


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
    dataByCategory: [
        ...data.dataByCategory,
        {
        id: `${newTitle}/${
            generateUniqueId({
                length: 6,
                useLetters: true,
                useNumbers: true
            })
        }`,
        categoryTitle: newTitle,
        budget: +newBudget,
        categoryData: []
        }
    ]
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
// ==========







      async  function submitForm(e: FormEvent){
            e.preventDefault()
const already = CategoryDatas.some(cat => cat.categoryTitle == newTitle)

            if(already){
                setNameExists(true)
                return
            }



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
                    <h2>Category created Successfully </h2>

                    <button className='bg-emerald-300 p-3 px-4 m-3 rounded-md text-white' onClick={()=> {
                            setCreateNewCat(false)
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
                          setCreateNewCat(false)
                          refetch()
                    }}> Close</button>


                    
                    
                </div>

            </ModalBackgroundBlur>
        }


    <form className='min-h-[50%] w-[35%] min-w-[300px] bg-white flex flex-col p-2' onSubmit={submitForm}>
    

<header className='border-b-2  w-full flex justify-between p-2 items-center' >
    <h3 >Create new category</h3>
    <span className='text-rose-400 p-2 cursor-pointer' onClick={()=>setCreateNewCat(false)}>
        <ImCross/>
    </span>


</header>

<section className='w-full flex flex-col mt-6'>

    <label htmlFor="category_title" className='my-4 ml-4'>
        <span>Title:</span>
        <input type="text" name='category_title' className=' border-2 mx-4 rounded-md p-1 border-mainOrange ml-9' value={newTitle} onChange={(e)=> setNewTitle(e.target.value)}  required/>
    </label>
    {
    nameExists && <small className='mx-auto text-[.7rem] text-rose-600'>Title already exists*</small>
}
<small className='mx-auto text-[.6rem]'>You can not edit category title, choose a proper name*</small>





    <label htmlFor="category_budget" className='my-3 mt-6 ml-4'>
        <span>Budget: </span>
        <input type="number" min={0} name='category_budget' className=' border-2 mx-4 rounded-md p-1 border-mainOrange' value={newBudget} onChange={(e)=> setNewBudget(+e.target.value)}  required/>
    </label>

</section>

<button className='mx-auto p-2 px-10 bg-emerald-400 rounded-sm mt-8'>
    Submit
</button>
    </form>
    </ModalBackgroundBlur>
  )
}

export default CreateNewCategory