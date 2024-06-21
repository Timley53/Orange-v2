import {  createContext } from "react";
import { ExpenseContextType, HomePageContextType, MyGlobalContextType } from "../Interface";
import { create } from "domain";
import { ExpensePageDataTypeDummyObj } from "./dummy";

export const GlobalContext = createContext<MyGlobalContextType>({
    showMenu: false,
    setShowMenu: ()=> {},
    userId: "", 
    setUserId: ()=> {},
    darkMode: false, 
    setDarkMode: ()=> {},

})


export const HomePageContext = createContext<HomePageContextType>({
  expensedata: {
    id: "",
    title: "",
        categoryList: [""],
        dataByCategory: [],
  },

  incomeData: {
    id: "",
    title: "",
    salary: 0,
    other:  []
  },
  savingsData: {
    id: " ",
    title: " ",
    targetedSavingPlan:  [], 
    freeSavings:  []
  },
  userId: ""

})


export const ExpenseContext = createContext<ExpenseContextType>({
  showDelete:false,
  setShowDelete: ()=> {},
  deleteModalDetails:{
    id: "",
    type: ""
  },
  setDeleteDetails: ()=> {}, 
  Mutating: false,
  isSuccess: false,
  MutateIsError: false,
MutateError:  null,
mutateAsync: () => {},
refetch: () => new Promise(()=>{}),
reset: () => {},
settled:false,
setSettled: ()=> {},
setIsSuccess: ()=>{},
setMutateIsError: ()=>{},
CategoryDatas: [],
currentCategory: "default"
, setCurCat: () => {},
data: ExpensePageDataTypeDummyObj
})





/*
import { useQuery } from 'react-query';
import axios from 'axios';

const MyComponent = () => {
  const [inputData, setInputData] = useState('');

  const fetchQuery = async () => {
    const response = await axios.get(`/api/endpoint?input=${inputData}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery('myQuery', fetchQuery, {
    enabled: false, // Disable the query initially
  });

  const handleClick = () => {
    // Enable the query when the button is clicked
    setQuery('myQuery', fetchQuery, {
      enabled: true,
    });
  };

  return (
    <>
      <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <button onClick={handleClick}>Fetch</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{data}</p>}
    </>
  );
};

// // Promise.allSettled([users, posts]).then((results) => {
//   const allPromisesResolved = results.every((result) => result.status === "fulfilled");

//   if (allPromisesResolved) {
//     // All promises were resolved, so we can invoke the "all resolved" logic.
//     handleAllPromisesResolved();
//   } else {
//     // At least one promise was rejected, so we can invoke the "some rejected" logic.
//     handleSomePromisesRejected();
//   }
// });


export default MyComponent;
*/
