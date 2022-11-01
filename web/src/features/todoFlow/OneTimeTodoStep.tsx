import { useRef } from "react";
import { Button } from "../../components/Button";
import { Task } from "../../interfaces/task";

interface Props {
    onOneTimeTodoDone: (arg0: string) => void
}

const OneTimeTodoStep = ({ onOneTimeTodoDone }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col justify-center h-full">
            <input ref={inputRef} placeholder="Add your description here..."
                className="block w-full border-0 focus:border-0 bg-transparent resize-none focus:ring-0 outline-none"
            />
            <Button text="Next" onClick={() => onOneTimeTodoDone(inputRef?.current?.value || '')} />
        </div>
    )
}

export { OneTimeTodoStep };
