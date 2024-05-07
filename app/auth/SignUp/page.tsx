"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import React, { FormEvent, useEffect, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import Link from "next/link"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, database } from "@/app/Utils/firebase"
import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import firebase from "firebase/compat/app"
import SIgnInModal from "@/app/Components/Modals/SIgnInModal"
import { Firestore, addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"
import { set } from "firebase/database"
import { signUpStyles } from "@/app/styles"

// import {useSignUp} from "../../CustomHooks"

type Inputs = {
  email: string,
  password: string

}

interface SignInDataTypes  {
  userCredential: firebase.auth.OAuthCredential;
};

type SignInVariables = {
  email: string;
  password: string;
};

function Page() {

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [signnInData, setSignnInData] = useState<SignInDataTypes | null>(null)
  const [Errorr, setError] = useState("")
  const [email, setEmail] = useState("")
  const [userId, setUserId] = useState("")
  
  const [password, setPassword] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [accountCreated, setAccountCreated] = useState(false)






  const onSubmit= (e: FormEvent) => {
    e.preventDefault()

    
    setFormSubmitted(true)
        // setSignnInInput({...data})

  }



                        useEffect(() => {



                        const signIn = async () => {


                            try{

                                setIsLoading(true)
                                const res = await createUserWithEmailAndPassword(auth, email, password);

                                // ===
                                


                                if(res.user){
                                    // console.log(res.user);

                                    const collectionRef = collection(database, "users")
                                    const docRef = doc(collectionRef, `${res.user.uid}` )
                                    const newUserDoc = await setDoc(docRef, {
                                        username: "",
                                        email,
                                        password,
                                        databaseCreated: false,
                                        createdOn: new Date().toDateString(),
                                    } )
                                    // console.log(newUserDoc)
                                    setAccountCreated(true)

                                }else{
                                    throw new Error()
                                }
                                // console.log(res)
                                
                                setIsLoading(false)
                                setFormSubmitted(false)
                            }catch(err){
                                setIsLoading(false)
                                // console.log(err)
                                // console.error()
                                setError("" + err)
                                setFormSubmitted(false)
                            }

                            }
                                if(formSubmitted) signIn()

                                return ()=> {
                                    console.log("clear")
                                }

                        }, [formSubmitted])


                        const {pageContainer, formStyles, FormHeader, emailLabel, emailInput, passwordLabel, submitBtn,passwordVisibility, passwordInput, passwordContainer} = signUpStyles
  
  
  return (
    
    <div className={pageContainer}>
{isLoading && <SIgnInModal/>}

      <form onSubmit={(e)=> onSubmit(e)} className={formStyles}>
      <h3 className={FormHeader}>Register account</h3>

      <label htmlFor="email" className={emailLabel}>
      <span className="mx-2">Email</span>
      <input type="email" placeholder="@xmail.com"  className={emailInput} value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      </label>



      <label htmlFor="password" className={passwordLabel}>
        <span className="mx-2">Password</span>

        <div className={passwordContainer}>
      <input type= {showPassword ? "text" : "password"} className={passwordInput} value={password} onChange={(e)=> setPassword(e.target.value)} minLength={7} required/>

          <span className={passwordVisibility} onClick={(e)=> setShowPassword(!showPassword)}>
           {showPassword && <MdVisibility/> || !showPassword && <MdVisibilityOff/>}
          </span>
        </div>
      </label>
        

      <button type="submit" className={submitBtn} > Submit</button>



        <div className="m-auto text-[15px]">Already signed up? <Link className="underline underline-offset-1 p-1" href={"/auth"}>Sign in</Link></div>
    </form>

    <span className="text-red-500 m-3 ">
    {Errorr.split(" ").slice(2).join(" ")}
    </span>  

    <span className="text-emerald-400 m-3 ">
        {
            accountCreated && "Account succefully created, Goto sign in page"
        }
    </span>
      </div>
  )
}

export default Page






