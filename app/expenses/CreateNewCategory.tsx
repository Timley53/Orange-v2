import React, { useState } from 'react'
import ModalBackgroundBlur from '../Components/ModalBackgroundBlur'
import { ImCross } from 'react-icons/im'

function CreateNewCategory() {
        const [nameExists, setNameExists] = useState(false)
        const [newTitle, setNewTitle] = useState("")
        const [newBudget, setNewBudget] = useState(0)



// const {} = useContext()




  return (
    <ModalBackgroundBlur>

    <form className='min-h-[50%] w-[60%] min-w-[400px] bg-white flex flex-col p-2'>
    

<header className='border-b-2  w-full flex justify-between p-2 items-center' >
    <h3 >Create new category</h3>
    <button className='text-rose-400 p-2'>
        <ImCross/>
    </button>


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
        <input type="number" min={0} name='category_budget' className=' border-2 mx-4 rounded-md p-1 border-mainOrange' value={newBudget} onChange={(e)=> setNewBudget(e.target.value)}  required/>
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