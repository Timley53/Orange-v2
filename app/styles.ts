

export const navStyles = {
        navContainer: {
            general: " transition-all duration-[1s] sm:hidden md:flex flex-col overflow-hidden bg-mainOrange h-screen sticky p-1 text-slate-200 z-50",
            mobile: "w-[40%] z-[100] h-full flex flex-col bg-mainOrange items-start p-2"

        },

        navExpandButton: "md:flex sm:hidden p-1  self-start justify-center items-center my-3  text-[17px] hover:bg-slate-200 hover:bg-opacity-70 hover:text-mainOrange rounded-md transition-all text-xl"
        ,

        navModal: "w-screen h-screen bg-black md:hidden  fixed top-0 left-0 backdrop-blur-md bg-opacity-20 flex z-[100]",

        mobileCancelMenuBtn: "self-end m-2 p-2 text-xl",

        linkListUl: "mt-11 flex flex-col",

}

export const signUpStyles = {
        pageContainer: 'w-screen h-screen flex flex-col items-center justify-center',
        formStyles: "md:w-[60%] sm:w-[85%] flex flex-col max-w-[300px] h-[60%] p-2 border-2 rounded-2xl",
        FormHeader: "text-center my-3 p-2",
        emailLabel: "flex flex-col mx-auto w-[90%] my-2",
        emailInput: "my-1 p-2 border-2 rounded-full ",
        passwordLabel: "flex flex-col mx-auto mt-4 w-[90%] ",
        passwordContainer:"flex my-1 p-1 border-2 rounded-full ",
        passwordInput: "p-1 pl-3 border-none outline-none w-[85%] ",
        passwordVisibility: "text-xl self-center cursor-pointer " ,
        submitBtn: "mt-8 w-[90%] text-center p-3 bg-emerald-300 mx-auto hover:bg-emerald-500 transition-all rounded-md "

    
}

export const wrapperStyles = {
        wrapperContainer: "flex w-full",
        mainWrapperGeneral: 'w-screen h-screen flex m-0 overflow-hidden border-2 ',
        mainWrapperDarkmode: "bg-black text-white"
}
