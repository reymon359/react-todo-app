import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

// Components
import Header from './components/Header';
import Jokes from './components/jokes/Jokes';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}  />)



  return (
    <div>
      <Header />
      <div className="todo-list">
        {todoItems}
      </div>
        <Jokes />
    </div>

  );
}

export default App;
