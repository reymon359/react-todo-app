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
        todos: todosData,
        isLoading: true,

        newTodo: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  // Fake Loader
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            isLoading: false
        })
    }, 2000)
  }


  // Creating a new array where if the item has the same id as the
  // one passed in the params we change its completed value
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
              todo.completed = !todo.completed
          }
          return todo
      })
      return {
          todos: updatedTodos
      }
    })
  }
  
  // New todo form
  handleFormChange(event){
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
    handleChange={this.handleChange }
    />)
    
    return (
      <div>
        <Header />
        <div className="new-todo-form">
          <form>
          <input name="newTodo" value={this.state.newTodo} onChange={this.handleFormChange} placeholder="Add a new todo" /><br />
          <button>Submit</button>
          </form>
        {this.state.newTodo}
        </div>
       
        <div className="todo-list">
          {todoItems}
        </div>

        {this.state.isLoading ?
        <h1 style={{textAlign: "center"}}>Loading...</h1> :
          <Jokes />}        
      </div>
    )    
  }
  
}

export default App;
