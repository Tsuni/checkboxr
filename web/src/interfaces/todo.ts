interface Todo {
    id: string,
    title: string,
    description?: string,
    createdAt: string,
    completedAt?: string,
    type: 'daily' | 'weekly' | 'monthly',
}

export { type Todo };
