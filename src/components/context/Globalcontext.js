import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {transactions:[]
    }
    //createcontext
export const GlobalContext = createContext(initialState);
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    const addNewTransaction=(transaction)=>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });

    }
   const deleteTransaction=(id)=>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });

    }
    return (<GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addNewTransaction}}>{children}</GlobalContext.Provider>);
}  
