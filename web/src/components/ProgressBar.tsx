interface Props {
    total: number,
    done: number,
    backgroundColor: string
}

const ProgressBar = ({ total, done, backgroundColor }: Props) => {
    const percentageDone = (done / total) * 100;

    return (
        <div className="bg-stone-300 w-full h-1">
            <div className={`h-1 ${backgroundColor} transition-all ease-in-out delay-150 duration-300`} style={{width: `${percentageDone}%`}} />
        </div>
    )
}

export { ProgressBar };
