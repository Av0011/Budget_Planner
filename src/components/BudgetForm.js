// components/BudgetForm.js
import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const BudgetForm = ({ onClose, setActiveForm }) => {
  const { dispatch, state } = useBudget();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const predefinedCategories = ['Groceries', 'Utilities', 'Entertainment', 'Dining', 'Others'];

  const handleSubmit = () => {
    if (selectedCategory && amount > 0) {
      dispatch({ type: 'ADD_BUDGET', category: selectedCategory, amount });
      onClose();
    }
  };

  const handleCancel = () => {
      onClose();
  };

  console.log(`BudgetForm - Active Form: ${setActiveForm === 'budget' ? 'activeForm' : 'inactiveForm'}`);

  return (
    <div className={`form-container ${setActiveForm === 'budget' ? 'activeForm' : ''}`}>
      <h3>Add Budget</h3>
      <label>
        Category:
        <br/>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="" disabled>Select Category</option>
          {predefinedCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <br/>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </label>
      <div className="button-container">
        <button onClick={handleSubmit} disabled={!selectedCategory || amount <= 0}>
          Add Budget
        </button>
        <button onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
