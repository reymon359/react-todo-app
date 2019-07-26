import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

// Components
import Header from './components/Header';
import Jokes from './components/jokes/Jokes';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        todos: todosData
    }
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
    
    return (
      <div>
        <Header />
      <div className="todo-list">
        {todoItems}
      </div>
        <Jokes />
      </div>
    )    
  }
  
}

export default App;
