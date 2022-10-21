import { Todo } from "../interfaces/todo";

const todoListMock : Todo[] = [
    {
        id: 'someId1',
        title: 'Diska',
        description: 'Diska undan disken',
        createdAt: '2022-10-15',
        completedAt: '2022-10-15',
        type: 'daily'
    },
    {
        id: 'someId2',
        title: 'Skrylle',
        description: 'Åka till skrylle med tussen',
        createdAt: '2022-10-15',
        completedAt: '',
        type: 'daily'
    },
    {
        id: 'someId7',
        title: 'Ringa fanny & seb',
        description: 'Kolla om dante o alma vill leka',
        createdAt: '2022-10-15',
        completedAt: '',
        type: 'daily'
    },
    {
        id: 'someId3',
        title: 'Måla tussens rum',
        description: 'Måla tussens rum',
        createdAt: '2022-10-15',
        completedAt: '',
        type: 'monthly'
    },
    {
        id: 'someId4',
        title: 'Storhandla',
        description: 'Handla massa mat',
        createdAt: '2022-10-12',
        completedAt: '2022-10-15',
        type: 'weekly'
    },
    {
        id: 'someId5',
        title: 'Plocka ur kontoret',
        description: 'Ploka ut allting från kontoret',
        createdAt: '2022-10-12',
        completedAt: '',
        type: 'weekly'
    }
];

export { todoListMock };