import { filter } from 'lodash';
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { Category } from '../interfaces/category';
import { Task } from '../interfaces/task';
import { Time } from '../interfaces/time';
import { Todo, Type } from '../interfaces/todo';
import { categoryData } from '../mockData/categoryData';
import { taskData } from '../mockData/taskData';
import { timeData } from '../mockData/timeData';

interface TodoState {
    todos: { [key: string]: Todo },
    addTodo: (arg0: Todo) => void,
    completeTodo: (arg0: Todo) => void,
    categories: { [key: string]: Category },
    time: { [key: string]: Time },
    tasks: { [key: string]: Task },
    getTodoByType: (type: Type) => Todo[]
}

const useTodoStore = create<TodoState>()(
    persist(
        (set, get) => ({
            todos: {},
            categories: categoryData,
            time: timeData,
            tasks: taskData,
            addTodo: (todo: Todo) => set(state => ({ todos: { ...state.todos, [todo.id]: todo } })),
            completeTodo: (todo: Todo) => {
                set(state => ({ todos: { ...state.todos, [todo.id]: { ...todo, completedAt: 'date now' } } }))
            },
            getTodoByType: (type: Type) => {
                const todos = get().todos;
                return filter(todos, todo => todo.type === type);
            }
        }),
        {
            name: 'todo-storage',
        }
    )
);

export { useTodoStore };
