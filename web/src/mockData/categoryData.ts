import { Category } from "../interfaces/category";

interface categories {
    [key: string]: Category 
} 

const categoryData: categories = {
    'cat1': {
        id: 'cat1',
        name: 'Work out'
    },
    'cat2': {
        id: 'cat2',
        name: 'Chores'
    }
}

export { categoryData };
