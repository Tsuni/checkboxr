import { groupBy } from "lodash";
import { DAILY, MONTHLY, WEEKLY } from "../../helpers/colorDeterminer";
import { todoListMock } from "../../mockData/todosList";
import { MainStats } from "./MainStats";
import { TodoSection } from "./TodoSection";

const Dashboard = () => {

    const groupedTodosByType = groupBy(todoListMock, todo => todo.type);
    console.log({groupedTodosByType})

    return (
        <div>
            <MainStats todos={todoListMock}/>
            <TodoSection todos={groupedTodosByType[DAILY]} type={DAILY} />
            <TodoSection todos={groupedTodosByType[WEEKLY]} type={WEEKLY} />
            <TodoSection todos={groupedTodosByType[MONTHLY]} type={MONTHLY} />
        </div>
    )
}

export { Dashboard };