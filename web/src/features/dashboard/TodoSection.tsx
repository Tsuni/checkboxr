import { filter, isEmpty, map, size } from "lodash";
import { ProgressBar } from "../../components/ProgressBar";
import { TodoListItem } from "../../components/TodoListItem";
import { getColorTheme } from "../../helpers/colorDeterminer";
import { Todo } from "../../interfaces/todo";

interface Props {
    todos: Todo[],
    type: string,
}

const TodoSection = ({ todos, type }: Props) => {
    const color = getColorTheme(type);
    const amountDone = size(filter(todos, (todo: Todo) => todo.completedAt));
    const uncompletedTodos = filter(todos, todo => !todo.completedAt);

    if (isEmpty(todos)) {
        return null;
    }

    return (
        <div className="mb-7">
            <div className="flex items-baseline text-stone-500 mb-2">
                <div className="mr-4 capitalize w-20">{type}</div>
                <ProgressBar total={size(todos)} done={amountDone} backgroundColor={color.bg.light} />
            </div>
            <div className="space-y-4 mb-2">
                {map(uncompletedTodos, todo => <TodoListItem key={todo.id} todo={todo} color={color.decorationColor} />)}
            </div>
        </div>
    );
}

export { TodoSection };