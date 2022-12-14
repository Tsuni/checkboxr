import { filter, map } from "lodash";
import { FlowButton } from "../../components/FlowButton";
import { useTodoStore } from "../../helpers/store";
import { Category } from "../../interfaces/category";
import { Task } from "../../interfaces/task";

interface Props {
    onSelectTask: (task: Task) => void,
    category: Category
}

const TaskStep = ({ onSelectTask, category }: Props) => {
    const tasks = useTodoStore(state => state.tasks);
    const filteredTaskByCategory = filter(tasks, task => task.categoryId === category.id && !task.isHidden);

    return (
        <div className="flex flex-col justify-center h-full space-y-8">
            {map(filteredTaskByCategory, task => <FlowButton key={task.id} text={task.name} onClick={() => onSelectTask(task)} />)}
        </div>
    )
}

export { TaskStep };
