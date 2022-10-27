import create from 'zustand'
import { Todo } from '../interfaces/todo';

interface TodoState {
    todos: { [key: string]: Todo },
    addTodo: (arg0: Todo) => void
}

const useTodoStore = create<TodoState>((set) => ({
  todos: {},
  addTodo: todo => set(state => ({ todos: {...state.todos, [todo.id]: todo } })),
}));

export { useTodoStore };
