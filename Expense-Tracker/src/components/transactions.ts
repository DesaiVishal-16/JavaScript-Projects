import {formatter} from '../utils/currencyFormatter';
import {saveTransactions}  from '../utils/storage';
import {TransactionObj} from '../types/transaction'
import {transactionList,transactionStatus} from '../dom/elements'
import '../styles/body.css';
import '../styles/form.css';
import '../styles/header.css';
import '../styles/transactions.css';



let transactions:TransactionObj[] = [];

export function setTransactions(data:TransactionObj[]){
        transactions = data
}

export function addTransaction(transaction: TransactionObj):void{
    transactions.push(transaction) 
    saveTransactions(transactions)
}

export function deleteTransaction(id:number):void{
    transactions = transactions.filter((trs)=>trs.id !== id)    
    saveTransactions(transactions)
}

export function renderList(){
  if(!transactionList)return;
  transactionList.innerHTML = "";
  
  if(transactions.length === 0){
       transactionStatus.innerHTML = `<p>No transactions</p>` 
  }else{
       transactionStatus.innerHTML = "";
  }

  transactions.forEach(({id,name,amount,date,type})=>{
    const sign = 'income' === type ? 1 : -1;

    const li = document.createElement("li");
    li.innerHTML = `
     <div class="name">
        <h4>${name}</h4>  
        <p>${new Date(date).toLocaleDateString()}</p>
     </div>
     <div class="amount ${type}">
        <span>${formatter.format(amount * sign)}</span>
     </div>
     <div class="action">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
     </svg>
     </div>
    `;
    const deleteIcon = li.querySelector('svg');
      if (deleteIcon) {
         deleteIcon.addEventListener('click', () => deleteTransaction(id));
      }
    transactionList.appendChild(li)
  })
 }

