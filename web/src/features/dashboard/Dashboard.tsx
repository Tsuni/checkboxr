import { groupBy } from "lodash";
import { Link } from "react-router-dom";
import shallow from 'zustand/shallow'
import { Button } from "../../components/Button";
import { DAILY, MONTHLY, WEEKLY } from "../../helpers/colorDeterminer";
import { useTodoStore } from "../../helpers/store";
import { Type } from "../../interfaces/todo";
import { MainStats } from "./MainStats";
import { TodoSection } from "./TodoSection";

const Dashboard = () => {
    const todos  = useTodoStore(state => state.getAllActiveTodos(), shallow);
    const groupedTodosByType = groupBy(todos, todo => todo.type);

    return (
        <div className="flex flex-col content-between h-full justify-between">
            <div>
                <MainStats todos={todos} />
                <TodoSection todos={groupedTodosByType[DAILY]} type={Type.daily} />
                <TodoSection todos={groupedTodosByType[WEEKLY]} type={Type.weekly} />
                <TodoSection todos={groupedTodosByType[MONTHLY]} type={Type.monthly} />
            </div>
            <div className="w-full flex justify-between mb-10">
                <Link to="todo/template"><Button text="Template" /></Link>
                <Link to="todo/one"><Button text="New" /></Link>
            </div>
        </div>
    )
}

export { Dashboard };