import { map } from "lodash";
import { ProgressBar } from "../../components/ProgressBar";
import { TodoListItem } from "../../components/Todo";
import { colorDeterminer } from "../../helpers/colorDeterminer";
import { Todo } from "../../interfaces/todo";

interface Props {
    todos: Todo[],
    type: string,
}

const TodoSection = ({ todos, type }: Props) => {
    const color = colorDeterminer(type);

    return (
        <div className="mb-7">
            <ProgressBar />
            <div className="space-y-4 mb-2">
                {map(todos, todo => <TodoListItem todo={todo} color={color} />)}
            </div>
        </div>
    );
}

export { TodoSection };