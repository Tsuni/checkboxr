interface Props {
    leftIconButton?: React.ReactNode | null,
    rightIconButton?: React.ReactNode | null
}

const NavBar = ({ leftIconButton, rightIconButton }: Props) => {

    return (
        <div className="flex justify-between">
            <div>{leftIconButton}</div>
            <div>{rightIconButton}</div>
        </div>
    )
}

export { NavBar };
