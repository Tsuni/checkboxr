import { ProgressBar } from "../../components/ProgressBar"
import { EyeIcon } from "../../icons/EyeIcon"
import { EyeSlashIcon } from "../../icons/EyeSlashIcon"

interface Props {
    total: number,
    done: number,
    backgroundColor: string,
    onToggleTodoView: () => void,
    showDone: boolean
}

const TodoSectionHeader = ({ total, done, backgroundColor, onToggleTodoView, showDone }: Props) => {

    return (
        <div className="flex align-baseline items-center mb-2">
            <ProgressBar total={total} done={done} backgroundColor={backgroundColor} />
            <div onClick={onToggleTodoView} className="ml-4">
                {showDone ? <EyeSlashIcon /> :<EyeIcon /> }
            </div>
        </div>
    )
}

export { TodoSectionHeader };
