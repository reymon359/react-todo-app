import React from 'react';
import TodoItem from './TodoItem';

// Components
import Header from './components/Header';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    
    <div>
      <Header />
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>

  );
}

export default App;
