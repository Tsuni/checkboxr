import { filter, size } from "lodash";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { NavBar } from "../../components/navigation/NavBar";
import { SidebarToggleBtn } from "../../components/navigation/SidebarToggleBtn";
import { useTodoStore } from "../../helpers/store";

const HistoryPage = () => {
    const todos = useTodoStore(state => state.todos);
    console.log({ todos });

    const completedTodos = filter(todos, 'completedAt');
    console.log({ completedTodos });

    return (
        <div>
            <NavBar rightIconButton={<SidebarToggleBtn />} />
            <dl className="my-7 text-center mx-auto grid max-w-3xl grid-cols-2 gap-8">
                <BigStatDisplay number={`${size(todos)}`} title="Created" />
                <BigStatDisplay number={`${size(completedTodos)}`} title="Completed" />
            </dl>
        </div>
    )
}

export { HistoryPage };
