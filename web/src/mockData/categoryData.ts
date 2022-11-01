import { Category } from "../interfaces/category";

interface categories {
    [key: string]: Category
} 

const categoryData: categories = {
    'cat1': {
        id: 'cat1',
        name: 'Work out',
        isHidden: false,
    },
    'cat2': {
        id: 'cat2',
        name: 'Chores',
        isHidden: false,
    },
    'cat3': {
        id: 'cat3',
        name: 'One off',
        isHidden: true
    }
}

export { categoryData };
