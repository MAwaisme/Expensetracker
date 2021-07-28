const TransactionReducer = ((state, action) =>{
    switch(action.type){
        case "Add_TRANSACTION":{
            return[action.paylode , ...state]
        }
        default:
            return state;
    }
})

export default TransactionReducer;