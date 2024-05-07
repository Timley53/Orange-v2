import React from 'react'
import { noData } from '../Utils/assets'
import Image from 'next/image'



export default function NoDataRecord() {
  return (
    <div className='w-full h-full min-h-[200px] flex items-center justify-center flex-col'>

        <h2>  
                  No record of any data found
</h2>
<Image src={noData} alt='imge' className='w-[20%] h-[20%] m-5'></Image>

    </div>
  )
}
