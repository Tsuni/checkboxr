import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { Todo, Type } from "../../interfaces/todo";
import { useTodoStore } from "../../helpers/store";
import { OneTimeTodoStep } from "./OneTimeTodoStep";
import { DescriptionStep } from "./DescriptionStep";
import { TypeStep } from "./TypeStep";
import { taskData } from "../../mockData/taskData";
interface todoBuilder {
    type: Type,
    description: string,
    title: string
}

const initialTodoBuilderState: todoBuilder = {
    type: Type.daily,
    description: '',
    title: '',
}

const TYPE_STEP = 'TYPE';
const DESCRIPTION_STEP = 'DESCRIPTION_STEP';
const ONE_TIME_TODO_STEP = 'ONE_TIME_TODO_STEP';

const OneTimeFlow = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(ONE_TIME_TODO_STEP);
    const addTodo = useTodoStore(state => state.addTodo);
    const [todoBuilderData, setTodoBuilderData] = useState<todoBuilder>(initialTodoBuilderState);

    const onTitleDone = (title: string) => {
        todoBuilderData.title = title;
        setStep(DESCRIPTION_STEP);
    }

    const onDescriptionDone = (description: string) => {
        todoBuilderData.description = description;
        setStep(TYPE_STEP);
    }

    const onSelectType = (type: Type) => {
        todoBuilderData.type = type;
        setTodoBuilderData({ ...todoBuilderData });
        onFinishTodo();
    }

    const onFinishTodo = () => {
        createTodo();
        navigate('/');
    }

    const createTodo = () => {
        const newTodo: Todo = {
            id: uuidv4(),
            taskId: taskData.oneTimeOnly.id,
            title: todoBuilderData.title,
            createdAt: '28-10-22',
            type: todoBuilderData.type,
            description: todoBuilderData.description
        }
        addTodo(newTodo);
    }

    if (step === ONE_TIME_TODO_STEP) {
        return <OneTimeTodoStep onTitleDone={onTitleDone} />
    }

    if (step === DESCRIPTION_STEP) {
        return <DescriptionStep onDescriptionDone={onDescriptionDone} />
    }

    return <TypeStep onSelectType={onSelectType} />;
}

export { OneTimeFlow };
