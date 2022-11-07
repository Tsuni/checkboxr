import { groupBy } from "lodash";
import { Link } from "react-router-dom";
import shallow from 'zustand/shallow'
import { Button } from "../../components/Button";
import { DAILY, MONTHLY, WEEKLY } from "../../helpers/colorDeterminer";
import { useTodoStore } from "../../helpers/store";
import { MainStats } from "./MainStats";
import { TodoSection } from "./TodoSection";

const Dashboard = () => {
    const { todos } = useTodoStore(state => ({ todos: state.todos, addTodo: state.addTodo, categories: state.categories }), shallow);
    const groupedTodosByType = groupBy(todos, todo => todo.type);

    return (
        <div className="flex flex-col content-between h-full justify-between">
            <div>
                <MainStats todos={todos} />
                <TodoSection todos={groupedTodosByType[DAILY]} type={DAILY} />
                <TodoSection todos={groupedTodosByType[WEEKLY]} type={WEEKLY} />
                <TodoSection todos={groupedTodosByType[MONTHLY]} type={MONTHLY} />
            </div>
            <div className="w-full flex justify-between mb-10">
                <Link to="todo/template"><Button text="Template" /></Link>
                <Link to="todo/one"><Button text="New" /></Link>
            </div>
        </div>
    )
}

export { Dashboard };