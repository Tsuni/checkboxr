import { FlowButton } from "../../components/FlowButton";

interface Props {
    onSelectType: (arg0: string) => void,
}

const TypeStep = ({ onSelectType }: Props) => {
    return (
        <div className="flex flex-col justify-center h-full space-y-8">
            <FlowButton text="Daily" onClick={() => onSelectType('Daily')} />
            <FlowButton text="Weekly" onClick={() => onSelectType('Weekly')}/>
            <FlowButton text="Monthly" onClick={() => onSelectType('Monthly')} />
        </div>
    )
}

export { TypeStep };
