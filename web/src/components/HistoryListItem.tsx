import { CheckIcon } from "../icons/CheckIcon";
import { XMarkIcon } from "../icons/XMarkIcon";
import { Todo } from "../interfaces/todo";

interface Props {
    todo: Todo
}

const HistoryListItem = ({ todo }: Props) => {

    return (
        <div>
            <div className="flex justify-between">
                <div className='text-stone-700 font-medium text-lg'>{todo.title}</div>
                {!todo.completedAt && <XMarkIcon />}
                {todo.completedAt && <CheckIcon />}
            </div>
            <div className='text-stone-500 font-medium text-base'>{todo.description}</div>
        </div>
    )
}

export { HistoryListItem };
