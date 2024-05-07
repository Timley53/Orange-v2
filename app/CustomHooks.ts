// // // import { useMutation } from '@tanstack/react-query'; 
// // // import { signInWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from './Utils/firebase';

// import { onAuthStateChanged } from "firebase/auth"
// import { auth } from "./Utils/firebase"
// import { useState } from "react"

// export const useCheckSignIn = () =>{
//     const [isAuthorized, setIsAuthorized] = useState(false)
//     const [isLoading, setIsLoading] = useState(false)

//     setIsLoading(true)
//         onAuthStateChanged(auth, (user)=> {
            
//             if(user){
//                 setIsAuthorized(true)
//                 setIsLoading(true)

//             }else{
//                 setIsAuthorized(false)
//                 setIsLoading(true)
//             }
//         })


//     // changeState()
//     return [isLoading, isAuthorized]
// }

