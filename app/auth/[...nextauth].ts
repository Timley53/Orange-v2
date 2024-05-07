// // [...nextauth].js
// import NextAuth from "next-auth"
// // import Providers from "next-auth/providers"
// import Providers from "next-auth/providers"
// import { FirebaseAdapter } from "@next-auth/"
// import { onAuthStateChanged } from "firebase/auth"


// // session({ session, token }) {
// //   session?.user.id = token.uid
// //   return session
// // },

// export default NextAuth({
//   providers: [
//     Providers.Firebase({
//       clientId: process.env.FIREBASE_CLIENT_ID,
//       clientSecret: process.env.FIREBASE_CLIENT_SECRET,
//     }),
//   ],
//     callbacks: {
//     async onAuthStateChanged()
//   },
// })
