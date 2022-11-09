import { Task } from "../interfaces/task";

const taskData: { [key: string]: Task } = {
    'task1': {
        id: 'task1',
        categoryId: 'cat1',
        name: 'Run',
        isHidden: false
    },
    'task2': {
        id: 'task2',
        categoryId: 'cat1',
        name: 'Weight lifting',
        isHidden: false
    },
    'task3': {
        id: 'task3',
        categoryId: 'cat1',
        name: 'Bike',
        isHidden: false
    },
    'task4': {
        id: 'task4',
        categoryId: 'cat2',
        name: 'Take out dishes',
        isHidden: false
    },
    'task5': {
        id: 'task5',
        categoryId: 'cat2',
        name: 'Grocery shopping',
        isHidden: false
    },
    'task_one_time_only': {
        id: 'task_one_time_only',
        categoryId: 'cat3',
        name: 'One time todo',
        isHidden: true
    }
}

export { taskData };
