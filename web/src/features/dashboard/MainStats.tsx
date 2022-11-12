import { filter, groupBy, size } from "lodash";
import { Link } from "react-router-dom";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { Todo, Type } from "../../interfaces/todo";

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
            <Link to="history/daily"><BigStatDisplay number={displayNumber(grouped[Type.daily])} title="Daily" /></Link>
            <Link to="history/weekly"><BigStatDisplay number={displayNumber(grouped[Type.weekly])} title="Weekly" /></Link>
            <Link to="history/monthly"><BigStatDisplay number={displayNumber(grouped[Type.monthly])} title="Monthly" /></Link>
        </dl>
    )
}

export { MainStats };
