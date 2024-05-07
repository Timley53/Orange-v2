"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import React, { useEffect, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import Link from "next/link"
import { signUpStyles } from "../styles"
import { useRouter,usePathname } from "next/navigation"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Utils/firebase"
import SIgnInModal from "../Components/Modals/SIgnInModal"
import { Span } from "next/dist/trace"

type Inputs = {
  email: string,
  password: string
}



function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()


  const [showPassword, setShowPassword] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState<Inputs>({
    email: "",
    password: ""
  })
  const [error, setError] = useState<string>("")

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    setFormData({
      ...data
    })
    setFormSubmitted(true)
  }



  const {pageContainer, formStyles, FormHeader} = signUpStyles
const router = useRouter()


  useEffect(()=>{
  const signIn = async () => {

try{


      const {email, password} = formData

      setIsLoading(true)
    const res = await signInWithEmailAndPassword(auth, email, password)

    if(res.user){
      
      setIsAuthorized(true)
    }else{
      throw new Error()
    }
    setIsLoading(false)
    setFormSubmitted(false)
    setFormData({
      email: "",
      password: ""
    })

  }catch(err){
    setIsLoading(false)
    // console.log(err)
    // console.error()
    setError("" + err)
    setFormSubmitted(false)
}

  } 

  if(formSubmitted) signIn()

  }, [formData, formSubmitted])
  
      

      useEffect(()=>{

        if(isAuthorized) router.replace("auth/DbAuth")        

      }, [isAuthorized])


  return (
    
    <div className={pageContainer}>
      {isLoading && <SIgnInModal/>}



      <form onSubmit={handleSubmit(onSubmit)} className="md:w-[60%] sm:w-[85%] flex flex-col max-w-[300px] h-[60%] p-2 border-2 rounded-2xl ">
      <h3 className="text-center my-3 p-2">Login to Dashboard</h3>
      {/* register your input into the hook by invoking the "register" function */}

      <label htmlFor="email" className="flex flex-col mx-auto w-[90%] my-2">
      <span className="mx-2">Email</span>
      <input type="email"  {...register("email", {required: true})} placeholder="@xmail.com"  className="my-1 p-2 border-2 rounded-full "/>
      {errors.email && <span className="text-sm m-1 text-red-500">This field is required</span>}
      </label>

      {/* include validation with required or other standard HTML validation rules */}


      <label htmlFor="password" className="flex flex-col mx-auto mt-4 w-[90%] ">
        <span className="mx-2">Password</span>

        <div className="flex my-1 p-1 border-2 rounded-full">
      <input type= {showPassword ? "text" : "password"} {...register("password", { required: true, minLength: 7 })} className="p-1 pl-3 border-none outline-none w-[85%]"/>

          <span className="text-xl self-center cursor-pointer" onClick={(e)=> setShowPassword(!showPassword)}>
           {showPassword && <MdVisibility/> || !showPassword && <MdVisibilityOff/>}
          </span>
        </div>
      {/* errors will return when field validation fails  */}
      {errors.password && <span className="text-sm m-1 text-red-500">This field is required, Password are {`>`}= 7 characters</span>}
      </label>
        

      <button type="submit" className="mt-8 w-[90%] text-center p-3 bg-emerald-300 mx-auto hover:bg-emerald-500 transition-all rounded-md" > Submit</button>



        <div className="m-auto text-[15px]">No account? <Link className="underline underline-offset-1 p-1" href={"auth/SignUp"}>Sign up</Link></div>
    </form>

    <span className="text-red-500 m-3 ">
    {error.split(" ").slice(2).join(" ")}
    </span> 
      </div>
  )
}

export default page






