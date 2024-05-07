import { formatDate, formatISO, isAfter } from 'date-fns'
import React from 'react'

function page() {

    const date1 = new Date().toLocaleDateString()
    const date2 = "2/21/2023"

console.log(new Date("2/21/2023").valueOf() - new Date("2/21/2024").valueOf())


  return (
    <div>Home</div>
  )
}

export default page