import { filter, size } from "lodash";
import { useState } from "react";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { FlowButton } from "../../components/FlowButton";
import { NavBar } from "../../components/navigation/NavBar";
import { SidebarToggleBtn } from "../../components/navigation/SidebarToggleBtn";
import { useTodoStore } from "../../helpers/store";
import { Type } from "../../interfaces/todo";
//{ type: Type | string, setType: (arg0: Type | null) => void }
const HistoryPage = () => {
    const [type, setType] = useState<Type | null>();
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
            <div className="flex justify-between">
                <FlowButton onClick={() => setType(null)} text="All" />
                <FlowButton onClick={() => setType(null)} text="Daily" />
                <FlowButton onClick={() => setType(null)} text="Weekly" />
                <FlowButton onClick={() => setType(null)} text="Monthly" />
            </div>
        </div>
    )
}

export { HistoryPage };
