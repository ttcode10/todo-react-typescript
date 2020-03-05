declare type Todo = {
  text: string;
  complete: boolean;
};

declare type Todos = Array<Todo>;

declare type ToggleTodo = (selectedTodo: Todo) => void;

declare type AddTodo = (newTodo: string) => void;