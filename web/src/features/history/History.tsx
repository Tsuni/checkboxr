import { filter, map, size } from "lodash";
import { useParams } from "react-router-dom";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { HistoryListItem } from "../../components/HistoryListItem";
import { GoBackButton } from "../../components/navigation/GoBackButton";
import { NavBar } from "../../components/navigation/NavBar";
import { useTodoStore } from "../../helpers/store";

const History = () => {
    const { type = 'daily' } = useParams();
    const todos = useTodoStore(state => state.getTodoByType(type));
    const completedTodos = filter(todos, todo => todo.createdAt);

    return (
        <div>
            <NavBar leftIconButton={<GoBackButton />} />
            <dl className="my-7 text-center mx-auto grid max-w-3xl grid-cols-2 gap-8">
                <BigStatDisplay number={`${size(completedTodos)}`} title="Done" />
                <BigStatDisplay number={`${size(todos)}`} title="Created" />
            </dl>
            <div className="space-y-4" >
                {map(todos, todo => <HistoryListItem key={todo.id} todo={todo} />)}
            </div>
        </div>
    )
}

export { History };
