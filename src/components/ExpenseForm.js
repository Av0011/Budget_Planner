// components/ExpenseForm.js
import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const ExpenseForm = ({ onClose, setActiveForm }) => {
  const { dispatch, state } = useBudget();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const predefinedCategories = ['Groceries', 'Utilities', 'Entertainment', 'Dining', 'Others'];

  const handleSubmit = () => {
    if (selectedCategory && title && description && amount > 0) {
      dispatch({ type: 'ADD_EXPENSE', category: selectedCategory, title, description, amount });
      onClose();
    }
  };

  const handleCancel = () => {
    onClose();
};

  console.log(`ExpenseForm - Active Form: ${setActiveForm === 'expense' ? 'activeForm' : 'inactiveForm'}`);

  return (
    <div className={`form-container ${setActiveForm === 'expense' ? 'activeForm' : ''}`}>
      <h3>Add Expense</h3>
      <label>
        Category:
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="" disabled>Select Category</option>
          {predefinedCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <br/>
      <label>
        Title:
        <br/>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </label>
      <div className="button-container">
        <button onClick={handleSubmit} disabled={!selectedCategory || !title || !description || amount <= 0}>
          Add Expense
        </button>
        <button onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
