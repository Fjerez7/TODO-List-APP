import {createContext, FC, ReactNode, useState} from "react";

interface SideBarContextProps {
    isSideBarShow: boolean;
    handleShowSideBar: () => void;
    optActiveInSidebar?: number;
    handleActiveIndex?: (index:number) => void;
}

export const SideBarContext = createContext<SideBarContextProps>({
    isSideBarShow: false,
    handleShowSideBar: () => {},
    optActiveInSidebar: 0,
    handleActiveIndex: () => {}
})

export const SideBarProvider:FC<{children:ReactNode }> = ({children}) => {
    const [isSideBarShow, setIsSideBarShow] = useState(true);
    const [optActiveInSidebar, setOptActiveInSidebar] = useState<number>()
    const handleShowSideBar = () => {
        setIsSideBarShow(!isSideBarShow)
    }
    const handleActiveIndex = (index:number) => {
        setOptActiveInSidebar(index)

    }
    return(
        <SideBarContext.Provider value={{isSideBarShow, handleShowSideBar, optActiveInSidebar,handleActiveIndex }}>
            {children}
        </SideBarContext.Provider>
    )
}