interface Todo {
    id: string,
    title: string,
    taskId: string,
    description?: string,
    createdAt: string,
    completedAt?: string,
    type: Type
}

enum Type {
    daily = "daily",
    weekly = "weekly",
    monthly = "monthly",
  }

export { type Todo, Type };
