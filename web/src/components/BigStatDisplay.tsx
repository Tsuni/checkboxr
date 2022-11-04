interface iBigStatDisplay{
    title?: string,
    number: string,
}

const BigStatDisplay = ({ title, number }: iBigStatDisplay) => {

    return (
        <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-stone-500">{title}</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-stone-700">{number}</dd>
      </div>
    )

}

export { BigStatDisplay };
