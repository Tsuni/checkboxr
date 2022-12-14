import { useTodoStore } from "../helpers/store";
import { CheckIcon } from "../icons/CheckIcon";
import { StopIcon } from "../icons/StopIcon";
import { Todo as iTodo } from "../interfaces/todo"

interface Props {
    todo: iTodo,
    color: string
}

const TodoListItem = ({ todo, color }: Props) => {
    const completeTodo = useTodoStore(state => state.completeTodo);

    return (
        <div>
            <div className="flex justify-between">
                <div className={`text-stone-700 font-medium text-lg underline ${color}`}>{todo.title}</div>
                {!todo.completedAt && <div onClick={() => completeTodo(todo)}><StopIcon /></div>}
                {todo.completedAt && <div><CheckIcon /></div>}
            </div>
            <div className={`text-stone-500 font-medium text-base`}>{todo.description}</div>
        </div>
    )
}

export { TodoListItem };
