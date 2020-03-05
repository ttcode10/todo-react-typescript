import React, { useState } from 'react';
import TodoList from './components/todo-list.component';
import AddTodoForm from './components/add-todo-form.component';

const App: React.FC = () => {
  const initialTodos: Todos = [
    {text: 'sdfdsfdsf', complete: false},
    {text: 'gfdgfdgad', complete: true},
  ];

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
        complete: !todo.complete
        }
      } return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        {
          text: newTodo,
          complete: false
        }
      ]);
    }
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
