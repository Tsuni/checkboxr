import { Outlet } from "react-router-dom";
import { CloseNavigationButton } from "../../components/navigation/CloseNavigationButton";
import { NavBar } from "../../components/navigation/NavBar";

const TodoFlow = () => (
    <div className="h-full">
        <NavBar rightIconButton={<CloseNavigationButton />} />
        <Outlet />
    </div>
)

export { TodoFlow };
