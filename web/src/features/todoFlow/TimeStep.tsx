import { map } from "lodash"
import { FlowButton } from "../../components/FlowButton"
import { Time } from "../../interfaces/time"
import { timeData } from "../../mockData/timeData"

interface Props {
    onSelectTime: (time: Time) => void
}

const TimeStep = ({ onSelectTime }: Props) => {
    return (
        <div className="flex flex-col justify-center h-full space-y-8">
            {map(timeData, time => <FlowButton key={time.id} onClick={() => onSelectTime(time)} text={time.readableTime} />)}
        </div>
    )
}

export { TimeStep };
