import React, { useState } from 'react'
import { PageDataCategoryType, SingleEntryDataType } from './Interface'
import { dummyCategoryData } from './Utils/junk'



interface hstoryDateTpe {
        from: string,
        to: string
    }



const useHistoryState = (catType: string,date:hstoryDateTpe ,expArr:PageDataCategoryType[] ) => { 



    const [theArray, setTheArray] = useState<SingleEntryDataType[] | []>([])

    const [filterData, setFilterData] = useState({
        catType: catType,
        date: date,
        expArr
    })

    if(catType === 'default' || filterData.catType === "default"){
      const sorting1 =  expArr.map(cat => cat.categoryData).flat(1).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

      setTheArray([...sorting1])
    }


    const sorting2 = expArr.find((cat) => cat.categoryTitle === filterData.catType)?.categoryData.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()) ;

if(!sorting2){
    setTheArray([ ...dummyCategoryData.categoryData])
} 

if(sorting2){
    setTheArray([...sorting2])   
}

    // const sortedExpense = findCategory?



  
    return [theArray, setFilterData]

}

export default useHistoryState