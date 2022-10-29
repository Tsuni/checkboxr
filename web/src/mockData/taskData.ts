import { Task } from "../interfaces/task";

const taskData: { [key: string]: Task } = {
    'task1': {
        id: 'task1',
        categoryId: 'cat1',
        name: 'Run'
    },
    'task2': {
        id: 'task2',
        categoryId: 'cat1',
        name: 'Weight lifting'
    },
    'task3': {
        id: 'task3',
        categoryId: 'cat1',
        name: 'Bike'
    },
    'task4': {
        id: 'task4',
        categoryId: 'cat2',
        name: 'Take out dishes'
    },
    'task5': {
        id: 'task5',
        categoryId: 'cat2',
        name: 'Grocery shopping'
    },
}

export { taskData };
