import { useRef } from "react";
import { Button } from "../../components/Button";

interface Props {
    onTitleDone: (arg0: string) => void
}

const OneTimeTodoStep = ({ onTitleDone }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col justify-center h-full space-y-12">
            <input ref={inputRef} placeholder="Title..."
                className="block w-full border-0 focus:border-0 bg-transparent resize-none focus:ring-0 outline-none    "
            />
            <Button text="Next" onClick={() => onTitleDone(inputRef?.current?.value || '')} />
        </div>
    )
}

export { OneTimeTodoStep };
