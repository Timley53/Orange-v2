import React from 'react'

function ModalBackgroundBlur({children}: {
    children: React.ReactNode
  }) {
  return (
    <div className='fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md left-0 top-0 flex items-center justify-center z-[100]'>

        {
            children
        }
        
    </div>  )
}

export default ModalBackgroundBlur