"use client"

import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, database } from '../Utils/firebase'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { ExpenseDeleModalType, FilterDateType, MyGlobalContextType, PageDataType } from '../Interface'
import { ExpenseContext, GlobalContext } from '../Utils/Context'
import { useMutation, useMutationState, useQuery } from '@tanstack/react-query'
import GeneralLoading from '../Components/GeneralLoading'
import Header from './Header'
import ExpenseRange from './ExpenseRange'
import SumTotals from './SumTotals'
import { FaCalculator } from 'react-icons/fa'
// import { PieChart } from '@mui/material/';
import { PieChart } from '@mui/x-charts/PieChart';
import ExpDoughnutChart from './ExpDoughnutChart'
import ExpHistory from './ExpHistory'
import FilterModal from '../Components/Modals/FilterModal'
import DeleteModal from '../Components/Modals/DeleteModal'
import { calculateCategoryTotal, getCurrentCategoryData } from '../Utils/helperFxn'
import useHistoryState from '../Hooks'
import { dummyCategoryData } from '../Utils/junk'





const noDataCategoryList: string[] = [""]

const noDataExpHistory =[
    {
      id:"",
      date: "",
      amount: 0,
      note: ""
  
    }
  ]

 export interface filterDateType {
    from: string,
    to: string,
    
  }



function page() {
  const {userId, setUserId, setShowMenu} = useContext<MyGlobalContextType>(GlobalContext)
  const [user, authLoading, authError] = useAuthState(auth)
  const [currentCategory, setCurCat] = useState<string>("default")
  const [showTotal, setShowTotal] = useState(false)


// mutation hooks
const [settled, setSettled] = useState(false)
const [MutateIsError, setMutateIsError] = useState(false)
const [isSuccess, setIsSuccess] = useState(false)

  const {isPending:Mutating, mutateAsync,error:MutateError, reset,  } = useMutation({mutationFn: deleteExpense, onSettled: OnDeleteSettled, onSuccess:OnDeleteSuccess, onError: OnDeleteError })

  // const mutation = useMutation({mutationFn: deleteExpense})
  // mutation.reset()

  

  // filter hooks
  
  // mutate("", {})


  //===========Delete context hooks
  const [showDelete, setShowDelete] = useState<boolean>(false)
  const [deleteModalDetails, setDeleteDetails] = useState<string>("")

  
  // ===============

  
  
  const router = useRouter()
      

const {isLoading,isError, data, error,failureReason, refetch,  } = useQuery({
  queryKey: ['expenseDocData'],
  enabled: user ? true : false,
  queryFn: async () => {


const docRef = doc(database,"users", user ? user.uid : userId)
const expSubColRef = collection(docRef, "expense") 
const expSubColDocRef = doc(expSubColRef, "expenseDoc", ) 
    const expenseDoc = await getDoc(expSubColDocRef)       
    return {
      expData: expenseDoc.data() ,
    
    } as {
      expData: PageDataType
    }
    

  }
}) 
// =======================

  useEffect(()=>{
    if(user) refetch()
    
    if(!user && !authLoading) router.replace("auth")
    }, [])
    
    console.log(user, data)
// =====================

// delete fxn====================
      async function deleteExpense( id:string): Promise<PageDataType | undefined>{

      const catTitle = id.split("/")[1] 

      try{


      if(data){

        
      const newData: PageDataType =   {
        ...data.expData,

        dataByCategory: data.expData.dataByCategory.map((category) => {
          if(category.categoryTitle === catTitle){
            return {
              ...category,
              categoryData:category.categoryData.filter(exp => exp.id !== id)
            }
          } 

          return {
            ...category
          }
        })

      }  

      const docRef = doc(database,"users", user ? user.uid : userId)
      const expSubColRef = collection(docRef, "expense") 
      const expSubColDocRef = doc(expSubColRef, "expenseDoc", )
      const deleteDoc = setDoc(expSubColDocRef,newData)
    

      // deleteDoc
    
  // get the updated doc
      const expenseDoc = await getDoc(expSubColDocRef)  
      
      return expenseDoc.data() as PageDataType 
      // return expenseDoc.exists

    
    } else{
      return
    }
  }catch(err){
    throw err
  }
      
    
    
    
    }

    function OnDeleteSettled(){
      setSettled(true)
    }
    function OnDeleteSuccess(){
      setIsSuccess(true)    }
      function OnDeleteError(){
      setMutateIsError(true)
    }
    // ======================================================


       ///Props Obj ====================
       const sumTotalsProps = {
        showTotal, setShowTotal,
        data: data ?  calculateCategoryTotal(data.expData.dataByCategory): []
      }

    if(authLoading) return (
      <GeneralLoading/>
      )

      if(user){

        
        return (
          <ExpenseContext.Provider value={{deleteModalDetails,setDeleteDetails,setShowDelete,showDelete, Mutating,
            mutateAsync,
            MutateError,
            isSuccess, MutateIsError, refetch, reset,settled, setSettled,
setMutateIsError,
setIsSuccess ,
            
            }}>


          <div className='expense w-full md:pl-4 flex flex-col h-screen overflow-y-scroll'>
  

     <Header categoryList = {data?.expData.categoryList ? data.expData.categoryList : noDataCategoryList }  currentCategory={currentCategory}  setCurCat={setCurCat} {...sumTotalsProps} />

     { showDelete && <DeleteModal showDelete={showDelete}
setShowDelete = {setShowDelete}
deleteModalDetails ={deleteModalDetails}
setDeleteDetails ={setDeleteDetails} />
}
<section className='flex w-full relative '>
  <div className="history w-full md:mr-6">
    <ExpenseRange/>

<div className="history_chart min-h-[64vh] flex md:flex-row md:flex-wrap sm:flex-col   items-center justify-between rounded-lg shadow-2xl shadow-slate-500 my-2 p-2 ">

<ExpHistory expenseArr ={data ? getCurrentCategoryData(currentCategory, data.expData.dataByCategory) : noDataExpHistory } />

<ExpDoughnutChart category={data ? data.expData.dataByCategory : []}/>


</div>




  </div>

  <SumTotals {...sumTotalsProps}/>
</section>
      
    </div>
    </ExpenseContext.Provider>

  )

}
}

export default page