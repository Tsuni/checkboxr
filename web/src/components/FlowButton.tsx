import { MouseEventHandler } from "react";

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    text: string
}


const FlowButton = ({ onClick, text }: Props) => (
    <button onClick={onClick} className="text-stone-700 font-medium text-lg uppercase">
        {text}
    </button>
)

export { FlowButton };
