import { useRef } from "react";
import { Button } from "../../components/Button";

interface Props {
    onDescriptionDone: (description: string) => void
}

const DescriptionStep = ({ onDescriptionDone }: Props) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className="flex flex-col justify-center h-full">
            <textarea ref={inputRef} placeholder="Add your description here..." rows={6}
                className="block w-full border-0 focus:border-0 bg-transparent resize-none focus:ring-0 outline-none"
            />
            <Button text="Complete" onClick={() => onDescriptionDone(inputRef?.current?.value || '')}/>
        </div>
    )
}

export { DescriptionStep };
