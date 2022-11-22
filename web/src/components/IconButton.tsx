
interface Props {
    onClick: () => void,
    icon: React.ReactNode
}

const IconButton = ({ onClick, icon }: Props) => {
    return (
        <button onClick={onClick} type="button" className="p-1">
            {icon}
        </button>
    )
}

export { IconButton };
