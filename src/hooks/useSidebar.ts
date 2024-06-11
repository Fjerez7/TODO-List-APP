import {useContext} from "react";
import {SideBarContext} from "../context/SideBarContext.tsx";

export const useSidebar = () => {
    const context = useContext(SideBarContext);
    return context;
}
