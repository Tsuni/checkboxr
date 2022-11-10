import { map } from "lodash"
import { FlowButton } from "../../components/FlowButton"
import { useTodoStore } from "../../helpers/store"
import { Time } from "../../interfaces/time"

interface Props {
    onSelectTime: (time: Time) => void
}

const TimeStep = ({ onSelectTime }: Props) => {
    const times = useTodoStore(state => state.time);
    return (
        <div className="flex flex-col justify-center h-full space-y-8">
            {map(times, time => <FlowButton key={time.id} onClick={() => onSelectTime(time)} text={time.readableTime} />)}
        </div>
    )
}

export { TimeStep };
