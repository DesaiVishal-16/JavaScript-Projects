export const form = document.getElementById("transactionsform")as HTMLFormElement;
export const checkbox = document.getElementById("type") as HTMLInputElement;
export const transactionStatus = document.getElementById("status")as HTMLElement;
export const balance = document.querySelector("#total-balance span")as HTMLSpanElement;
export const income =  document.querySelector("#income span")as HTMLSpanElement;
export const expense = document.querySelector("#Expense span")as HTMLSpanElement;
export const transactionList = document.getElementById("transactionList")as HTMLUListElement;
export const viewAllTrans = document.getElementById("viewAllTrans")as HTMLDivElement;
export const modal = document.querySelector(".modal") as HTMLDivElement;
export const closeBtn = modal.querySelector(".close-btn") as HTMLSpanElement;
export const modalTransactionList = document.querySelector("#modal-Transaction-List") as HTMLUListElement;
