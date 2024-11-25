import { form, viewAllTrans, checkbox } from './dom/elements';
import { loadTransactions, saveTransactions } from './utils/storage';
import { TransactionObj } from './types/transaction';
import { setTransactions, addTransaction, renderList } from './components/transactions';
import { updateTotal } from './components/total';
import { showModal } from './components/modal';
import './styles/body.css';
import './styles/form.css';
import './styles/header.css';
import './styles/transactions.css';


const transactions = loadTransactions();
setTransactions(transactions);
updateTotal(transactions);
renderList();

form?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name') as string;
  const amount = parseFloat(formData.get('amount') as string);
  const date = new Date(formData.get('date') as string);
  const type = checkbox.checked ? 'income' : 'expense';

  if (!name || isNaN(amount) || amount < 0 || isNaN(date.getTime())) {
    alert('Please fill form');
    return;
  }

  const newTransaction: TransactionObj = {
    id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
    name,
    amount,
    date,
    type,
  };

  addTransaction(newTransaction);
  updateTotal(transactions);
  renderList();
  form.reset();
});

viewAllTrans?.addEventListener('click', () => {
  showModal(transactions);
});

