// components/BudgetPlanner.js
import React, { useState } from 'react';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import FinancialSummary from './FinancialSummary';
import { BudgetProvider } from '../context/BudgetContext';

const BudgetPlanner = () => {
  const [activeForm, setActiveForm] = useState(null);

  const openBudgetForm = () => {
    setActiveForm('budget');
  };

  const openExpenseForm = () => {
    setActiveForm('expense');
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <BudgetProvider>
      <div>
        <fieldset>
        <div className='button-form'>
          <button onClick={openBudgetForm}>Set Budget</button>
          <button onClick={openExpenseForm}>Add Expense</button>
        </div>
        </fieldset>
        {activeForm === 'budget' && <BudgetForm onClose={closeForm} setActiveForm={activeForm} />}
        {activeForm === 'expense' && <ExpenseForm onClose={closeForm} setActiveForm={activeForm} />}
        <FinancialSummary />
      </div>
    </BudgetProvider>
  );
};

export default BudgetPlanner;
