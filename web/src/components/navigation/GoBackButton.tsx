import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { IconButton } from "../IconButton";


const GoBackButton = () => {
    const navigate = useNavigate();


    return (
        <IconButton icon={<ArrowLeftIcon />} onClick={() => navigate(-1)} />
    )
};

export { GoBackButton };
