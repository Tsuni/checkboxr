interface Props {
    total: number,
    done: number,
    backgroundColor: string
}

const ProgressBar = ({ total, done, backgroundColor }: Props) => {
    const percentageDone = (done / total) * 100;
    const fillPercentageClass = `w-[${percentageDone}%]`;
    console.log({percentageDone})

    return (
        <div className="bg-stone-300 w-full h-1">
            <div className={`${fillPercentageClass} h-1 ${backgroundColor}`} />
        </div>
    )
}

export { ProgressBar };
