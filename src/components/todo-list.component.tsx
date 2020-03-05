import React from 'react';
import TodoItem from './todo-item.components';

interface TodoListProps {
  todos: Todos;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
  return (
    <React.Fragment>
    {
      todos.map(todo => {
        return (
          <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
        )
      })
    }
    </React.Fragment>
  )
};

export default TodoList;
