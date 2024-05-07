import generateUniqueId from "generate-unique-id"
import { CategoryBudget, PageDataCategoryType, PageDataType, SingleEntryDataType, expenseDefaultCat,  incomeDefaultCat } from "../Interface"

import {isAfter, isEqual} from "date-fns"
import JSXStyle from "styled-jsx/style"
import { IconType } from "react-icons"
import { GiClothes } from "react-icons/gi"
import { SlOptionsVertical } from "react-icons/sl";
import React from "react"


/**
 * 
 * @param categoryListArr -- its an array of string(category names/title)
 * the array is mapped over to create an array of PageDataCategoryType which is an object of each category conataining category id, title and category data in an array of its own eg. expense category clothing: clothing expenses == categoryData 
 * @returns --- the array of Default categories created using the categoryListArr
 */

export const generatePageDefaultCatArray: (categoryListArr:string[])=> PageDataCategoryType[] = (categoryListArr )=> {

    const newArr:PageDataCategoryType[] = categoryListArr.map(cat => {
        const newDefault: PageDataCategoryType = {
          id:`${cat}/${generateUniqueId({
             length: 6,
             useLetters: true,
             useNumbers:true,
         })}`,
             categoryTitle: cat,
             categoryData: []      
 }
 
 return newDefault
 
     } )

    return newArr
}




/**
 * 
 * @param page --- the page title
 * @returns ---the page object data to be stored in the document of the page collection
 */
export const generatePageDataStuctureDefault: (page: string)=> PageDataType = (page: string) => {




    const PageDataStucture: PageDataType  = {
        id:`${page}/${generateUniqueId({
            length: 6,
            useLetters: true,
            useNumbers:true,
        })}`,
        title: page,
        categoryList: page === "expense" ?  ["clothing","utilities", "rent", "health", "internet", "gifts", "food", "transport", "maintenance", "taxes", "others"] : page === "income" ?  ["salary", "freelance"] : [],
        dataByCategory: page === "expense" ? generatePageDefaultCatArray( ["clothing","utilities", "rent", "health", "internet", "gifts", "food", "transport", "maintenance", "taxes", "others"]) : page === "income" ? generatePageDefaultCatArray( ["salary", "freelance"]) : [],
        budget: [
            {
                id: `rent/${generateUniqueId({
                    length: 6,
                    useLetters: true,
                    useNumbers:true,
                })}`,
                title: 'rent',
                amount: 2000
            }
        ]
    }


    return PageDataStucture
}

// export const expenseDefaultCat = ["clothing","utilities", "rent", "health", "internet", "gifts", "food", "transport", "maintenance", "taxes", "others"]

// export const incomeDefaultCat = ["salary", "freelance"]

export interface CatTotalType {
    title: string,
    total: number
}

const currentYear = new Date().toDateString()
// const testDate = new Date(currentYear + "").toDateString()
// console.log(currentYear);
// console.log(testDate);

export const calculateCategoryTotal:(catArr :PageDataCategoryType[])=> CatTotalType[] = (catArr :PageDataCategoryType[]) =>{

    const allCatTotal:CatTotalType[] = catArr.map((catData)=> {
        return {
            title: catData.categoryTitle,
            total: catData.categoryData.filter((data)=> isAfter(new Date(data.date), new Date(`01-01-${currentYear}`) )).reduce((acc, curr:SingleEntryDataType)=> acc + curr.amount , 0)
        }
    })

        return allCatTotal
}


export function showMaxCat(catArr: CatTotalType[]){

    const maxCat = catArr.sort((a, b) => b.total - a.total);

    return maxCat[0]


}
// export check

// (catArr: CatTotalType[]) => CatTotalType

export const higestInMonth = ()=>{

}



export const BudgetTotal: (budgetArr: CategoryBudget[]) => number = (budgetArr) => {

    return budgetArr.reduce((acc, cur) => acc + cur.amount,0)

}

 type ExtractAllexpenseOutType = (allCategoryArr: PageDataCategoryType[]) => SingleEntryDataType[] | []



export const extractAllexpenseOut: ExtractAllexpenseOutType = (allCategoryArr)=> {

    const allArrConcat = allCategoryArr.map((cat) => {
       return [...cat.categoryData]
    })

    return allArrConcat.flat()    
}



type createSingleDataEntry = (type: "expense" | "income", category: string, amount: number, note?: string ) => SingleEntryDataType


export const createSingleEntryData: createSingleDataEntry = (type, category, amount, note) => {


    const newData: SingleEntryDataType = {
        id: `${type}/${category}/${generateUniqueId({
            length: 6,
            useLetters: true,
            useNumbers:true,
        })}`,
        date:  new Date().toDateString(),
        amount: amount,
        note: note
         
    }

    return newData
    
}


/**
 * 
 * @param category a string value of the category's data we want to display, the initial value is default which is just all the expenses sorted by date 
 * @param allCategory this is an array of all the expenses per category
 * @returns an array of singledata entry 

 */

export const getCurrentCategoryData = (category: string, allCategory:PageDataCategoryType[] ) => {

    if(category === "default"){
        return allCategory.map(cat => cat.categoryData).flat(1).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    }

    const findCategory =  allCategory.find((cat) => cat.categoryTitle === category)



    const sortedExpense = findCategory?.categoryData.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

    return sortedExpense
}


export type sortSingleEntryDataByDateType = (to:string, from:string, allCategory:SingleEntryDataType[] ) => SingleEntryDataType[] | []


export const sortSingleEntryDataByDate:sortSingleEntryDataByDateType = (to, from, allCategory) => {
        if(allCategory.length < 1){
            return []
        }

    const equalDate = isEqual(to, from)

    if(equalDate) {
        return allCategory.filter((exp) => isEqual(to, new Date(exp.date))).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    }

    const sortedExpense = allCategory.filter((exp) => isAfter(new Date(exp.date), new Date(from) ) && isAfter(new Date(to), new Date(exp.date))).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

    return sortedExpense
    
}


type TotalCategory  = ( exSingleEntry:SingleEntryDataType[]) => number

export const TotalCategory:TotalCategory = (exSingleEntry)=> {

        return exSingleEntry.reduce((acc, curr) => acc + curr.amount ,0)
}


// export 
// filterslashsvgrepocom




// type getType =  (category: string) => React.JSX.Element

// export const GetIcon: getType = (category: string) => {

//     if(category == "clothing"){
//         // return( <GiClothes/>) 
//     }


//     // return <SlOptionsVertical/>

// } 



// const chooseIcon = (type)=> {

//     if(type === 'transport'){
//         return <MdOutlineEmojiTransportation/>
//     } else if(type === 'food'){
//         return <MdOutlineFastfood/>
//     }else if(type === 'utility'){
//         return <MdOutlineCable/>
//     } else if(type === 'entertainment'){
//         return <MdOutlineLiveTv/>
//     } else if(type === 'clothing'){
//         return <GiClothes/>
//     } else{
//         return 
//     }


// }