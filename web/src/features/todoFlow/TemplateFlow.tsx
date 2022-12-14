import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../helpers/store";
import { Category } from "../../interfaces/category";
import { Task } from "../../interfaces/task";
import { Todo, Type } from "../../interfaces/todo";
import { CategoryStep } from "./CategoryStep";
import { TaskStep } from "./TaskStep";
import { TypeStep } from "./TypeStep";
import { DescriptionStep } from "./DescriptionStep";

const TYPE_STEP = 'TYPE';
const CATEGORY_STEP = 'CATEGORY';
const TASK_STEP = 'TASK_STEP';
const DESCRIPTION_STEP = 'DESCRIPTION_STEP';
interface todoBuilder {
    type: Type,
    category: Category
    task: Task,
    description: string
}

const initialTodoBuilderState: todoBuilder = {
    type: Type.daily,
    category: { id: '', name: '', isHidden: false },
    task: { id: '', name: '', categoryId: '', isHidden: false },
    description: ''
}

const TemplateFlow = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(TYPE_STEP);
    const [todoBuilderData, setTodoBuilderData] = useState<todoBuilder>(initialTodoBuilderState);
    const addTodo = useTodoStore(state => state.addTodo);

    const onSelectType = (type: Type) => {
        todoBuilderData.type = type;
        setTodoBuilderData({ ...todoBuilderData });
        setStep(CATEGORY_STEP);
    }

    const onSelectCategory = (category: Category) => {
        todoBuilderData.category = category;
        setTodoBuilderData({ ...todoBuilderData });
        setStep(TASK_STEP);
    }

    const onSelectTask = (task: Task) => {
        todoBuilderData.task = task;
        setTodoBuilderData({ ...todoBuilderData });
        setStep(DESCRIPTION_STEP);
    }

    const onDescriptionDone = (description: string) => {
        todoBuilderData.description = description;
        onFinishTodo();
    }

    const onFinishTodo = () => {
        createTodo();
        navigate('/');
    }

    const createTodo = () => {
        const newTodo: Todo = {
            id: uuidv4(),
            taskId: todoBuilderData.task.id,
            title: todoBuilderData.task.name,
            createdAt: Date.now(),
            type: todoBuilderData.type,
            description: todoBuilderData.description
        }
        addTodo(newTodo);
    }

    if (step === TYPE_STEP) {
        return <TypeStep onSelectType={onSelectType} />
    }

    if (step === CATEGORY_STEP) {
        return <CategoryStep onSelectCategory={onSelectCategory} />
    }

    if (step === TASK_STEP) {
        return <TaskStep onSelectTask={onSelectTask} category={todoBuilderData.category} />
    }

    return <DescriptionStep onDescriptionDone={onDescriptionDone} />
}

export { TemplateFlow };
