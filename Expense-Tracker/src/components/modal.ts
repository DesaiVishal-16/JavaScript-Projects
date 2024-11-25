import { modal, closeBtn, modalTransactionList } from '../dom/elements';
import { formatter } from '../utils/currencyFormatter';
import { TransactionObj } from '../types/transaction';
import '../styles/body.css';
import '../styles/form.css';
import '../styles/header.css';
import '../styles/transactions.css';



export function showModal(transactions: TransactionObj[]): void {
  if (!modal) {
    console.error('Modal not found!');
    return;
  }

  modal.style.display = 'block';

  closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  renderModalWithList(transactions);
}

function renderModalWithList(transactions: TransactionObj[]): void {
  if (!modalTransactionList) {
    console.error('Transaction list element not found!');
    return;
  }

  modalTransactionList.innerHTML = '';

  if (transactions.length === 0) {
    modalTransactionList.innerHTML = '<p>No transactions to display</p>';
    return;
  }

  transactions.forEach(({ name, amount, date, type }) => {
    const sign = type === 'income' ? 1 : -1;

    const li = document.createElement('li');
    li.className = 'modal-list';
    li.innerHTML = `
      <div class="name">
        <h4>${name}</h4>
        <p>${new Date(date).toLocaleDateString()}</p>
      </div>
      <div class="amount ${type}">
        <span>${formatter.format(amount * sign)}</span>
      </div>
    `;
    modalTransactionList.appendChild(li);
  });
}
