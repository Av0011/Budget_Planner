// context/BudgetContext.js
import React, { createContext, useContext, useReducer } from 'react';

const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

const initialState = {
  budgets: {},
  expenses: {},
};

const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return {
        ...state,
        budgets: {
          ...state.budgets,
          [action.category]: action.amount,
        },
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: {
          ...state.expenses,
          [action.category]: [...(state.expenses[action.category] || []), { title: action.title, description: action.description, expense: action.amount }],
        },
      };
    default:
      return state;
  }
};

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return <BudgetContext.Provider value={{ state, dispatch }}>{children}</BudgetContext.Provider>;
};
