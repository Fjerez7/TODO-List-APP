import {FC, ReactNode} from "react";
import styles from "./Layout.module.css";
import {useSidebar} from "../../hooks/useSidebar.ts";

interface LayoutProps {
    children: ReactNode;
}


export const Layout:FC<LayoutProps> = ({ children }) => {
    const {isSideBarShow} = useSidebar()
    return(
        <div className={`${styles.layout} ${isSideBarShow ? styles.shiftRight : ''}`}>
            <div className={styles.layoutContent}>
                {children}
            </div>
        </div>
    )
}