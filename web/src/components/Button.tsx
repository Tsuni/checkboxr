import { MouseEventHandler } from "react";

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    text: string
}

const Button = ({ onClick, text }: Props) => (
    <button
        onClick={onClick}
        type="button"
        className="items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-stone-700 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
      >
        {text}
      </button>
)

export { Button };
