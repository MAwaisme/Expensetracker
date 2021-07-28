import { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer"

const initialTransactions = [
    {amount: -50000, dese: "Cash"},
    {amount: -40, dese: "Book"},
    {amount: -200, dese: "Camera"}
]

export const TransactionContext = createContext(initialTransactions);
// console.log(TransactionContext.currentValue)

export const TransactionProvider = ({childern})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    
    function addTransaction(transObj){
        dispatch({
            type: "Add_TRANSACTION",
            paylode:{
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction
        }}>
        {childern}
        </TransactionContext.Provider>
    )
}
