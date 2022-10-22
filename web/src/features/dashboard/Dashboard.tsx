import { groupBy } from "lodash";
import { Link, redirect } from "react-router-dom";
import { Button } from "../../components/Button";
import { DAILY, MONTHLY, WEEKLY } from "../../helpers/colorDeterminer";
import { todoListMock } from "../../mockData/todosList";
import { MainStats } from "./MainStats";
import { TodoSection } from "./TodoSection";

const Dashboard = () => {
    const groupedTodosByType = groupBy(todoListMock, todo => todo.type);

    return (
        <div>
            <MainStats todos={todoListMock}/>
            <TodoSection todos={groupedTodosByType[DAILY]} type={DAILY} />
            <TodoSection todos={groupedTodosByType[WEEKLY]} type={WEEKLY} />
            <TodoSection todos={groupedTodosByType[MONTHLY]} type={MONTHLY} />
            <Link to="todoFlow"><Button text="Add" /></Link>
        </div>
    )
}

export { Dashboard };