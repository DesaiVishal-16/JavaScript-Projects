import {TransactionObj} from "../types/transaction";

export function loadTransactions():TransactionObj[]{
    try{
       const storedData = localStorage.getItem('transactions');
       const transactions = storedData ? JSON.parse(storedData) : [];
       if(!Array.isArray(transactions)){
         throw new Error("Invalid Data format");
        }
        return transactions;
    }catch(error){
       console.log("Error loading transactions",error)
       return [];
    }
}

export function saveTransactions(transactions:TransactionObj[]):void{
    localStorage.setItem("transactions",JSON.stringify(transactions))
}