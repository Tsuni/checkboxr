import { countBy, filter, size } from "lodash";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { useTodoStore } from "../../helpers/store";
import { Type } from "../../interfaces/todo";

const DailyHistory = () => {
    const todos = useTodoStore(state => state.getTodoByType(Type.daily));
    const completedTodos = filter(todos, todo => todo.createdAt);

    return (
        <div>
            <dl className="mt-10 text-center mx-auto grid max-w-3xl grid-cols-2 gap-8 mb-7">
                <BigStatDisplay number={`${size(completedTodos)}`} title="Done" />
                <BigStatDisplay number={`${size(todos)}`} title="Created" />
            </dl>
            list of daily stuff
        </div>
    )
}

export { DailyHistory };
