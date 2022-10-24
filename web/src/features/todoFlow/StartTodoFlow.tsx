import { useState } from "react";
import { Category } from "../../interfaces/category";
import { Task } from "../../interfaces/task";
import { Time } from "../../interfaces/time";
import { CategoryStep } from "./CategoryStep";
import { TaskStep } from "./TaskStep";
import { TimeStep } from "./TimeStep";
import { TypeStep } from "./TypeStep";

const TYPE_STEP = 'TYPE';
const CATEGORY_STEP = 'CATEGORY';
const TASK_STEP = 'TASK_STEP';
const TIME_STEP = 'TIME_STEP';

interface todoBuilder {
    type: string,
    category: Category
    task: Task,
    time: Time
}

const initialTodoBuilderState: todoBuilder = {
    type: '',
    category: { id: '', name: '', },
    task: { id: '', name: '', categoryId: ''},
    time: { id: '', readableTime: ''}
}

const StartTodoFlow = () => {
    const [step, setStep] = useState(TYPE_STEP);
    const [todoBuilderData, setTodoBuilderData] = useState<todoBuilder>(initialTodoBuilderState);

    const onSelectType = (type: string) => {
        todoBuilderData.type = type;
        setTodoBuilderData({...todoBuilderData });
        setStep(CATEGORY_STEP);
    }

    const onSelectCategory = (category: Category) => {
        todoBuilderData.category = category;
        setTodoBuilderData({...todoBuilderData });
        setStep(TASK_STEP);
    }

    const onSelectTask = (task: Task) => {
        todoBuilderData.task = task;
        setTodoBuilderData({...todoBuilderData });
        setStep(TIME_STEP);
    }

    const onSelectTime = (time: Time) => {
        todoBuilderData.time = time;
        setTodoBuilderData({...todoBuilderData });
        setStep(TIME_STEP);
    }

    const stepRenderer = () => {
        if (step === TYPE_STEP) {
            return <TypeStep onSelectType={onSelectType} />
        }

        if (step === CATEGORY_STEP) {
            return <CategoryStep onSelectCategory={onSelectCategory} />
        }

        if (step === TASK_STEP) {
            return <TaskStep onSelectTask={onSelectTask} category={todoBuilderData.category} />
        }

        if (step === TIME_STEP) {
            return <TimeStep onSelectTime={onSelectTime} />
        }

    }

    return (
        <div className="h-full">
            {stepRenderer()}
        </div>
    )
}

export { StartTodoFlow };
