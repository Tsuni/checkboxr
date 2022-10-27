import { groupBy } from "lodash";
import { Link } from "react-router-dom";
import shallow from 'zustand/shallow'
import { Button } from "../../components/Button";
import { DAILY, MONTHLY, WEEKLY } from "../../helpers/colorDeterminer";
import { useTodoStore } from "../../helpers/store";
import { todoListMock } from "../../mockData/todosList";
import { MainStats } from "./MainStats";
import { TodoSection } from "./TodoSection";


const Dashboard = () => {
    const { todos, addTodo } = useTodoStore(state => ({todos: state.todos, addTodo: state.addTodo }), shallow);
    const groupedTodosByType = groupBy(todoListMock, todo => todo.type);
    console.log({todos})
    return (
        <div>
            <MainStats todos={todoListMock}/>
            <TodoSection todos={groupedTodosByType[DAILY]} type={DAILY} />
            <TodoSection todos={groupedTodosByType[WEEKLY]} type={WEEKLY} />
            <TodoSection todos={groupedTodosByType[MONTHLY]} type={MONTHLY} />
            <Link to="todoFlow"><Button text="Add" /></Link>
            <Button text="Add todo" onClick={() => addTodo(groupedTodosByType[DAILY][0])} />
        </div>
    )
}

export { Dashboard };