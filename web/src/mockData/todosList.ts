import { Todo } from "../interfaces/todo";

const todoListMock : Todo[] = [
    {
        title: 'Diska',
        description: 'Diska undan disken',
        createdAt: '2022-10-15',
        completedAt: '2022-10-15',
        type: 'daily'
    },
    {
        title: 'Skrylle',
        description: 'Åka till skrylle med tussen',
        createdAt: '2022-10-15',
        completedAt: '',
        type: 'daily'
    },
    {
        title: 'Måla tussens rum',
        description: 'Måla tussens rum',
        createdAt: '2022-10-15',
        completedAt: '',
        type: 'monthly'
    },
    {
        title: 'Storhandla',
        description: 'Handla massa mat',
        createdAt: '2022-10-12',
        completedAt: '2022-10-15',
        type: 'weekly'
    }
];

export { todoListMock };