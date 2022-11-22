import { filter, isEmpty, map, partition, size } from "lodash";
import { useState } from "react";
import { TodoListItem } from "../../components/TodoListItem";
import { getColorTheme } from "../../helpers/colorDeterminer";
import { filterDateForType } from "../../helpers/date";
import { Todo, Type } from "../../interfaces/todo";
import { TodoSectionHeader } from "./TodoSectionHeader";

interface Props {
    todos: Todo[],
    type: Type,
}   

const TodoSection = ({ todos, type }: Props) => {
    const [showDone, toggleTodoView] = useState(false);
    const color = getColorTheme(type);
    const todosForTimeSpan = filter(todos, todo => filterDateForType(type, todo.createdAt));
    const [doneTodos, uncompletedTodos] = partition(todosForTimeSpan, todo => todo.completedAt);

    if (isEmpty(todos)) {
        return null;
    }

    return (
        <div className="mb-6">
            <TodoSectionHeader total={size(todos)} done={size(doneTodos)} backgroundColor={color.bg.light} onToggleTodoView={() => toggleTodoView(!showDone)} showDone={showDone} />
            <div className="space-y-4">
                {map(showDone ? doneTodos : uncompletedTodos, todo => <TodoListItem key={todo.id} todo={todo} color={color.decorationColor} />)}
            </div>
        </div>
    );
}

export { TodoSection };