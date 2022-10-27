import create from 'zustand'
import { persist } from 'zustand/middleware'
import { Todo } from '../interfaces/todo';

interface TodoState {
    todos: { [key: string]: Todo },
    addTodo: (arg0: Todo) => void
}

const useTodoStore = create<TodoState>()(
    persist(
        (set) => ({
            todos: {},
            addTodo: todo => set(state => ({ todos: {...state.todos, [todo.id]: todo } })),
        }),
        {
            name: 'todo-storage',
        }
    )
);

export { useTodoStore };
