import { filter, isEmpty, map, partition, size } from "lodash";
import { useState } from "react";
import { TodoListItem } from "../../components/TodoListItem";
import { getColorTheme } from "../../helpers/colorDeterminer";
import { Todo } from "../../interfaces/todo";
import { TodoSectionHeader } from "./TodoSectionHeader";

interface Props {
    todos: Todo[],
    type: string,
}

const TodoSection = ({ todos, type }: Props) => {
    const [showDone, toggleTodoView] = useState(false);
    const color = getColorTheme(type);
    const amountDone = size(filter(todos, (todo: Todo) => todo.completedAt));
    const [doneTodos, uncompletedTodos] = partition(todos, todo => todo.completedAt);

    if (isEmpty(todos)) {
        return null;
    }

    return (
        <div className="mb-6">
            <TodoSectionHeader total={size(todos)} done={amountDone} backgroundColor={color.bg.light} onToggleTodoView={() => toggleTodoView(!showDone)} showDone={showDone} />
            <div className="space-y-4">
                {map(showDone ? doneTodos : uncompletedTodos, todo => <TodoListItem key={todo.id} todo={todo} color={color.decorationColor} />)}
            </div>
        </div>
    );
}

export { TodoSection };