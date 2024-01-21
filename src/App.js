// App.js
import React from 'react';
import { BudgetProvider } from './context/BudgetContext'; 
import BudgetPlanner from './components/BudgetPlanner';
import './App.css';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <h1>Budget Planner</h1>
        <BudgetPlanner />
      </div>
    </BudgetProvider>
  );
}

export default App;
