interface Todo {
    id: string,
    title: string,
    taskId: string,
    description?: string,
    createdAt: number,
    completedAt?: number,
    type: Type
}

enum Type {
    daily = "daily",
    weekly = "weekly",
    monthly = "monthly",
  }

export { type Todo, Type };
