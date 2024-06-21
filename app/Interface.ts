import { QueryObserverResult, RefetchOptions, UseMutateFunction } from "@tanstack/react-query";
import { compareAsc, compareDesc, isAfter } from "date-fns";
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

export interface DeleteModalDetailsType{
    type: string,
    id: string
  }
export interface ExpenseContextType {
    showDelete:boolean,
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>,
    deleteModalDetails:DeleteModalDetailsType 
    setDeleteDetails  :React.Dispatch<React.SetStateAction<DeleteModalDetailsType>> ,
    Mutating: boolean,
    mutateAsync:UseMutateFunction<SavingsPage | ExpensePageDataType | undefined, Error, string, unknown>,
MutateError:Error | null
refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<{
    expData:   ExpensePageDataType;
}, Error>>,
reset: ()=> void,
settled:boolean,
setSettled:React.Dispatch<React.SetStateAction<boolean>>,
isSuccess: boolean,
MutateIsError:boolean,
setMutateIsError:React.Dispatch<React.SetStateAction<boolean>>,
setIsSuccess:React.Dispatch<React.SetStateAction<boolean>>,
CategoryDatas: ExpensePageDataCategoryType[] | []
currentCategory: string
, setCurCat: React.Dispatch<React.SetStateAction<string>>
}

export interface HomePageContextType {
    expensedata: ExpensePageDataType ,
    incomeData: IncomePage ,
    savingsData: SavingsPage ,
    userId: string

}



//  PAGES 


// generic===================
export interface userDbInfoType{
    createdOn: string,
    databaseCreated: boolean,
    email: string,
    password: string,
    username: string
}

// ================



// =============expnese page

// ===expense page data object(in collection doc)
export interface ExpensePageDataType {
    id: string;
    title: string
        categoryList: string[],
        dataByCategory: ExpensePageDataCategoryType[] ,
}




// categories for each page's data, ie: expense entire data file
export interface ExpensePageDataCategoryType{
    id: string;
    categoryTitle: string;
    categoryData: ExpenseSingleEntryDataType[] | [],
    budget: number

}





// for singular entry of expense and income, it  is then put to respectfull category 
export interface ExpenseSingleEntryDataType{
    id: string; //expense/category/kjs34k
    date: string;
    amount: number;
    note?: string
}



// =============expnese page
// ===================================================================



// savings page
// targetedSavingType
export interface TargetedPlans{
    id: string,
    target: number,
    title: string,
    data: SingularEntryTargetedSavingsType[] | [],
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
    data:  SingularFreeSavingsType[] | []

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
    targetedSavingPlan: TargetedPlans[] | [], 
    freeSavings: SingularFreeSavingsType[] | []

}





// /==============income 

export interface IncomePage{
    id: string,
    title: string,
    salary: number,
    other: OtherIncomeEntryType[] | []


}


export interface OtherIncomeEntryType{
    id: string,
    amount:  number,
    date: string,
    label: string,
    note?: string 

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
  



