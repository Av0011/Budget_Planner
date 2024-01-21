// components/FinancialSummary.js
import React from 'react';
import { useBudget } from '../context/BudgetContext';
// import './FinancialSummary.css'; // Assuming you have a separate CSS file

const FinancialSummary = () => {
  const { state } = useBudget();

  const calculateRemainingBudget = (category) => {
    const budget = state.budgets[category] || 0;
    const expenses = (state.expenses[category] || []).reduce((total, expense) => total + expense.expense, 0);
    return budget - expenses;
  };

  console.log('Financial Summary Component Rendered with State:', state);

  return (
    <div>
      <h2>Financial Summary</h2>

      <div>
        <fieldset><legend>Budget Table</legend>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Budget Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(state.budgets).map((category) => (
              <tr key={category}>
                <td>{category}</td>
                <td>${state.budgets[category]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </fieldset>
      </div>

      <div>
      <fieldset><legend>Expense Table</legend>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Expense Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(state.expenses).map((category) =>
              state.expenses[category].map((expense, index) => (
                <tr key={index}>
                  <td>{category}</td>
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
                  <td>${expense.expense}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </fieldset>
      </div>

      <div>
      <fieldset><legend>Remaining Budget</legend>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Remaining Budget</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(state.budgets).map((category) => (
              <tr key={category} className={calculateRemainingBudget(category) < 0 ? 'negative' : ''}>
                <td>{category}</td>
                <td>${calculateRemainingBudget(category)}</td>
              </tr>
            ))}
            {Object.keys(state.expenses).map((category) =>
              !state.budgets[category] && (
                <tr key={category} className="negative">
                  <td>{category}</td>
                  <td>${calculateRemainingBudget(category)}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        </fieldset>
      </div>
    </div>
  );
};

export default FinancialSummary;
