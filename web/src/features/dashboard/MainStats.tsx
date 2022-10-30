import { filter, find, groupBy, size } from "lodash";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { Todo } from "../../interfaces/todo";

interface Props {
    todos: { [key: string]: Todo }
}

const MainStats = ({ todos }: Props) => {

    const grouped = groupBy(todos, 'type');

    const displayNumber = (group: Todo[]): string => {
        const completedTodosForType = filter(group, (todo: Todo) => todo.completedAt);
        
        const totalDone = size(completedTodosForType);

        return `${totalDone}/${size(group)}`
    }


    return (
        <dl className="mt-10 text-center mx-auto grid max-w-3xl grid-cols-3 gap-8 mb-7">
            <BigStatDisplay number={displayNumber(grouped['daily'])} title="Daily" />
            <BigStatDisplay number={displayNumber(grouped['weekly'])} title="Weekly" />
            <BigStatDisplay number={displayNumber(grouped['monthly'])} title="Monthly" />
        </dl>
    )
}

export { MainStats };
