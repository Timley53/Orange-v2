import { QueryObserverResult, RefetchOptions, UseMutateFunction } from "@tanstack/react-query";
import { StringFormat } from "firebase/storage";
import generateUniqueId from "generate-unique-id";

export const expenseDefaultCat = ["clothing","utilities", "rent", "health", "internet", "gifts", "food", "transport", "maintenance", "taxes", "others"]

export const incomeDefaultCat = ["salary", "freelance"]


export interface MyGlobalContextType {
    showMenu: boolean,
    setShowMenu:  React.Dispatch<React.SetStateAction<boolean>>;
    userId: string, 
    setUserId:  React.Dispatch<React.SetStateAction<string>>;
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


// expense
export interface ExpenseContextType {
    showDelete:boolean,
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>,
    deleteModalDetails:string
    setDeleteDetails  :React.Dispatch<React.SetStateAction<string>> ,
    Mutating: boolean,
    mutateAsync:UseMutateFunction<PageDataType | undefined, Error, string, unknown>,
MutateError:Error | null
refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<{
    expData: PageDataType;
}, Error>>,
reset: ()=> void,
settled:boolean,
setSettled:React.Dispatch<React.SetStateAction<boolean>>,
isSuccess: boolean,
MutateIsError:boolean,
setMutateIsError:React.Dispatch<React.SetStateAction<boolean>>,
setIsSuccess:React.Dispatch<React.SetStateAction<boolean>>,
}

// for singular entry of expense and income, it  is then put to respectfull category 
export interface SingleEntryDataType{
    id: string;
    date: string;
    amount: number;
    note?: string
}


// categories for each page's data, ie: expense entire data file
export interface PageDataCategoryType{
    id: string;
    categoryTitle: string;
    categoryData: SingleEntryDataType[] | []

}

// budget types

export interface CategoryBudget {
    id: string,
    title: string,
    amount: number
}



// targetedSavingType
export interface TargetedPlans{
    id: string,
    target: number,
    title: string,
    data: SingularEntryTargetedSavingsType[],
    note?: string
}

export interface SingularEntryTargetedSavingsType{
    id: string,
    title: string,
    date: string, 
    amount: number
}


//free savings 

export interface FreeSavingsPlan{
    id: string,
    title: string,
    note?: string,
    data: []

}

export interface SingularFreeSavingsType{
    id: string,
    title: string,
    amount: number,
    date: string,
}


// savings type structures

export interface SavingsPage{
    id: string,
    title: string,
    targetedSavingPlan: TargetedPlans[],
    freeSavings: SingularFreeSavingsType[]

}




// ===each page data object(in collection doc)
export interface PageDataType {
    id: string;
    title: string
        categoryList: string[],
        dataByCategory: PageDataCategoryType[],
        budget: CategoryBudget[] 
}






export interface userDbInfoType{
    createdOn: string,
    databaseCreated: boolean,
    email: string,
    password: string,
    username: string
}

// export interface expenseType {
//     id: string;
//     amount: number;
//     date: string;
// }




// export interface ExpensePageDataType {
//     title: string
//     id: string,
//     exp: expType[] | [],
// }

// export interface ExpensePageDataType {
//     id: string
//     categoryList: string[],
//     expenseData: expenseCategoryType[]    
// }
// // ======


// // incoome 

// export interface IncomeType {
//         id: string;
//         category:string;
//         amount: number;
//         date: string;


// }

// export interface IncomePageDataType<T> {
//     id: string
//     categoryList: string[],
//     incomeData: T[]
// }


export interface FilterDateType {
    category: string,
    from: string,
    to: string
  }
  


export interface ExpenseDeleModalType {
   type: "expense" | "category",
   title: string,
   id: string

  }
  



