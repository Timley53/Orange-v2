import { PageDataType } from '@/app/Interface';
import { QueryObserverResult, RefetchOptions } from '@tanstack/query-core';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react'

interface Props {
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>,
setDeleteDetails  :React.Dispatch<React.SetStateAction<string>> ,
refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<{
    expData: PageDataType;
}, Error>>,
reset: () => void,
settled:boolean,
setSettled: React.Dispatch<React.SetStateAction<boolean>>,
setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>,

}

function SuccessModal({setDeleteDetails,setShowDelete, refetch, reset, settled, setSettled, setIsSuccess} : Props) {
    const queryClient = useQueryClient()
  return (
    <div className='w-[250px] m-auto h-[150px] py-6 bg-white flex flex-col items-center p-3 rounded-lg'>
        <h2 className='mx-auto'>Deleted Successfully</h2>
        <button className='bg-emerald-400 rounded-md p-4 px-8 my-6' onClick={()=> {
            setDeleteDetails("")
            setShowDelete(false)
            setSettled(false)
            queryClient.refetchQueries()
            setIsSuccess(false)
            
        }}>Done</button>
    </div>
  )
}

export default SuccessModal 