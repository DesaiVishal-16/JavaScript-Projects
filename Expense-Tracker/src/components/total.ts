import { formatter } from '../utils/currencyFormatter';
import { balance, income, expense } from '../dom/elements';
import { TransactionObj } from '../types/transaction';

export function updateTotal(transactions: TransactionObj[]): void {
  const incomeTotal = transactions.filter(trx => trx.type === 'income').reduce((total, trx) => total + trx.amount, 0);
  const expenseTotal = transactions.filter(trx => trx.type === 'expense').reduce((total, trx) => total + trx.amount, 0);
  const balanceTotal = incomeTotal - expenseTotal;

  balance.style.color = balanceTotal < 0 ? 'indianred' : 'green';
  balance.textContent = formatter.format(balanceTotal);
  income.textContent = formatter.format(incomeTotal);
  expense.textContent = formatter.format(-expenseTotal);
}

