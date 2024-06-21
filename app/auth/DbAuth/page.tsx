"use client"

import { MyGlobalContextType, userDbInfoType } from '@/app/Interface'
import { GlobalContext } from '@/app/Utils/Context'
import { auth, database } from '@/app/Utils/firebase'
import { generatePageDataStuctureDefault } from '@/app/Utils/helperFxn'
import { error } from 'console'
import { onAuthStateChanged } from 'firebase/auth'
import { DocumentData, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

function page() {

  const {userId, setUserId} = useContext<MyGlobalContextType>(GlobalContext)

    const router = useRouter()
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [erorr, setEror] = useState("")
    const [databaseCreatedSuccessfully, setDatabaseCreatedSuccessfully] = useState(false)
    const [noBd, setNodb] = useState(false)
    const [uId, setUid] = useState("")


// ============creating Data fxn 


const createCollection = async (collectionName: string) => {
    const docRef = doc(database, "users", uId )
    const subColRef = collection(docRef, collectionName )
    const subColDoc = doc(subColRef, `${collectionName}Doc`)


  try {

     const res = await setDoc(subColDoc, {...generatePageDataStuctureDefault(collectionName)});
    console.log(`Collection ${collectionName} created successfully!`);
    console.log(res);
  } catch (error) {
    console.error(`Error creating collection ${collectionName}:`, error);
    throw error;
  }
};


const onSuccess = async (docData : DocumentData) => {

    try{

        console.log(docData);
        const docRef = doc(database, "users", uId)
        const newDoc =  await setDoc(docRef, {
            ...docData,
            databaseCreated: true
        })
        setDatabaseCreatedSuccessfully(true)
        router.replace("../dashboard")

    }catch(error){
        setEror(erorr + ""),
        setIsLoading(false)
        
    }


};

const onError = (err: Error) => {
  console.error("Error creating collections!");
  setIsLoading(false)
  setEror(err.message)

};





// ================
    useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user)=>{
    
                if(user){
                        setUid(user.uid)
                      setUserId(`${user.uid}`)
                        setIsAuthorized(true)
                }else{
                        router.replace("auth")
                }
            })

            return () => {
                unsubscribe()
              };
    }, [])


    useEffect(()=>{


        // const createAll ======>


        const createCollections = async () => {

            const promises = [];
      
            promises.push(createCollection("expense"));
            promises.push(createCollection("income"));
            promises.push(createCollection("savings"));
            // promises.push(createCollection("collection3"));
            // promises.push(createCollection("collection4"));
      
            try {
                // setIsLoading(true)
              await Promise.all(promises);
            //   console.log("All collections created successfully!");
                    const docRef = doc(database, "users", uId )

              const docRes = await getDoc(docRef)
              if(docRes.exists()){
                
                  onSuccess(docRes.data());

              }else{
                throw Error
              }
              // Invoke success callback
            } catch (error) {
              console.error("Error creating collections:", error);
              // Invoke error callback
              onError(error as Error);

              
            }
          };
      


      


        // =============




        const dbLogic = async ()=> {

            try{

            
            const docRef = doc(database, "users", `${uId}`)
            
            const checkDb = await getDoc(docRef)

            if(checkDb.exists()){
                console.log(checkDb.data())

                const { createdOn, databaseCreated, email, password, username} : userDbInfoType | DocumentData = checkDb.data()
                // console.log(databaseCreated)
                if(!databaseCreated) {createCollections();
                }else if(databaseCreated){

                    router.replace("../dashboard")
                }

            }else{
                // console.log("user doesnt exist");
                throw new Error()

            }


        }catch(err){
            //   setEror(error + "")  
              onError(err as Error);
        }
            
        } 

        if(isAuthorized) dbLogic()
       
    }, [isAuthorized, uId])




  return (
    isLoading && <div className="w-screen h-screen flex items-center justify-center">
        <h2>Please wait while we authorize you......</h2>
    </div> || erorr && <div className="w-screen h-screen flex items-center justify-center">
        <h2>We came accros an error while trying to log you in, please <Link href="../auth" className='p-2 px-3 bg-rose-300 rounded-md text-white'>Go back to login</Link></h2>

    </div>


  
  )
}

export default page