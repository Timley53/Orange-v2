"use client"

import { useAuthState } from 'react-firebase-hooks/auth';

import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { Auth, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, database } from '../Utils/firebase'
import { useQuery } from '@tanstack/react-query'
import { collection, doc, getDoc } from 'firebase/firestore'
import {} from "firebase/auth"
import { MyGlobalContextType, PageDataType, userDbInfoType } from '../Interface'
import { GlobalContext } from '../Utils/Context'
import { redirect, useRouter } from 'next/navigation'
import GeneralLoading from '../Components/GeneralLoading';
import Introduction from '../Components/dashboardComp/Introduction';
import GrossBlocks from '../Components/dashboardComp/GrossBlocks';
import { isAfter } from 'date-fns';
import LastExpense from './LastExpense';
import HomeCategories from './HomeCategories';
import IncomeCategory from './IncomeCategory';
// import { useCheckSignIn } from '../CustomHooks'

function page() {

  const {userId, setUserId} = useContext<MyGlobalContextType>(GlobalContext)
  const [user, authLoading, authError] = useAuthState(auth)


//   console.log(authLoading );
// console.log(user );
// console.log(user?.uid );


  
  const router = useRouter()


  

  

const {isLoading,isError, data, error,failureReason, refetch } = useQuery({
  queryKey: ['dashboardData'],
  enabled: user ? true : false,
  queryFn: async () => {

  //  console.log(user?.uid, "id")

const docRef = doc(database,"users", user ? user.uid : userId)
const expSubColRef = collection(docRef, "expense") 
const expSubColDocRef = doc(expSubColRef, "expenseDoc", ) 
const incSubColRef = collection(docRef, "income") 
const uncSubColDocRef = doc(incSubColRef, "incomeDoc", ) 

        const [fetchExpense, fetchIncome, fetchUserDetails] = await Promise.all([
            getDoc(expSubColDocRef),
            getDoc(uncSubColDocRef),
            getDoc(docRef)

        ]) 
      
    return {
      expData: fetchExpense.data(),
      incomeData: fetchIncome.data(),
      userId: fetchUserDetails.id,
      userDetails: fetchUserDetails.data()
    }
    

  }
}) 

console.log(new Date().getMonth())

useEffect(()=>{
if(user) refetch()

if(!user && !authLoading) router.replace("auth")
}, [])



// console.log(data);

// const {username} :userDbInfoType = data ? data.userId : null
// console.log(error);
// console.log(failureReason);
// console.log(userId);

if(authLoading) return (
<GeneralLoading/>
)

const nodataExp:PageDataType = {
    id: "",
    title : "",
    categoryList: [""],
    dataByCategory: [],
    budget: []

}


if(data){

  

return (


    <div className='w-full p-2 pt-0  h-full overflow-y-scroll'>
      <div className="into-bal w-full pb-4 px-2">
  <Introduction username= {data ? data?.userDetails?.username : ""} />

      <GrossBlocks income= { data.incomeData || nodataExp }  expense={data.expData ? data.expData : nodataExp}/>



      </div>


<section className='history flex m-2 py-3 items-center justify-center sm:flex-wrap '>
<LastExpense expense={data.expData ? data.expData : nodataExp}/>
<HomeCategories expense={data.expData ? data.expData : nodataExp}/>
<IncomeCategory Income={data.incomeData ? data.incomeData : nodataExp}/>

</section>

<button onClick={()=>{
  signOut(auth).then(() => {
    router.push("auth");
  }).catch((error) => {
   console.log( "An error happened");
   
  });
}}>Logout</button>




    </div>
  )
}

}

export default page