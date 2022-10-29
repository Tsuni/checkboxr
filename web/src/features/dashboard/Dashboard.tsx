import { groupBy } from "lodash";
import { Link } from "react-router-dom";
import shallow from 'zustand/shallow'
import { Button } from "../../components/Button";
import { DAILY, MONTHLY, WEEKLY } from "../../helpers/colorDeterminer";
import { useTodoStore } from "../../helpers/store";
import { Todo } from "../../interfaces/todo";
import { todoListMock } from "../../mockData/todosList";
import { MainStats } from "./MainStats";
import { TodoSection } from "./TodoSection";

const testTodo: Todo = {
    id: 'someId2',
    title: 'Skrylle',
    description: 'Åka till skrylle med tussen',
    createdAt: '2022-10-15',
    completedAt: '',
    type: 'daily'
};

const Dashboard = () => {
    const { todos, addTodo, categories } = useTodoStore(state => ({todos: state.todos, addTodo: state.addTodo, categories: state.categories }), shallow);
    const groupedTodosByType = groupBy(todos, todo => todo.type);
    console.log({todos, categories})
    return (
        <div>
            <MainStats todos={todoListMock}/>
            <TodoSection todos={groupedTodosByType[DAILY]} type={DAILY} />
            <TodoSection todos={groupedTodosByType[WEEKLY]} type={WEEKLY} />
            <TodoSection todos={groupedTodosByType[MONTHLY]} type={MONTHLY} />
            <Link to="todoFlow"><Button text="Add" /></Link>
            <Button text="Add todo" onClick={() => addTodo(testTodo)} />
        </div>
    )
}

export { Dashboard };