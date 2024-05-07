
  // try{  
  //    onAuthStateChanged(auth, (user)=> {
  //     if(!user){
  //       router.replace("notloggedIn")
  //     }

import { PageDataCategoryType } from "../Interface"

  //     if(user){
  //       uid = user.uid
  //       setUserId(user.uid)
  //     } 
      


  //   })}catch(error){
  //     throw error
  //   }
//  console.log(uid, "sdmdsmn");
 
// const colRef = collection(database, "users")


export const dummyData = [
  {
    type: "default",
    date: 1 
  },
  {
    type: "default",
    date: 2 
  },
  {
    type: "default",
    date: 3 
  },
  {
    type: "other",
    date: 4 
  },
  {
    type: "default",
    date: 10 
  },
  {
    type: "default",
    date: 11 
  },
  {
    type: "other",
    date: 13 
  },
  {
    type: "default",
    date: 11 
  },
]


export const dummyCategoryData:PageDataCategoryType = {
    id: "dummyCat",
    categoryTitle: "dummy",
    categoryData:[
      

    ]
}