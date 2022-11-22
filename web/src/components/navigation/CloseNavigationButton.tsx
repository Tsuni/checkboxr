import { useNavigate } from "react-router-dom"
import { XMarkIcon } from "../../icons/XMarkIcon";
import { IconButton } from "../IconButton"

const CloseNavigationButton = () => {
    const navigate = useNavigate();

    return (
        <IconButton
            onClick={() => navigate('/')}
            icon={<XMarkIcon />}
        />
    )
}

export { CloseNavigationButton };
