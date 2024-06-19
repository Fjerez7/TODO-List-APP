import {Button} from "primereact/button";
import styles from './SideBar.module.css'
import {useNavigate} from "react-router-dom";
import {useSidebar} from "../../hooks/useSidebar.ts";

export const SideBar = () => {
    const {isSideBarShow,handleShowSideBar, optActiveInSidebar,
        handleActiveIndex} = useSidebar()
    const navigate = useNavigate()
    const optionsSidebar= [
        {label: 'Add Task', icon: 'pi pi-plus-circle'},
        {label: 'Search', icon: 'pi pi-search'},
        {label: 'Today', icon: 'pi pi-calendar-times',url:'today'},
        {label: 'Upcoming', icon: 'pi pi-calendar',url:'/upcoming'},
    ]
    const handleClick = (index: number,url:string) => {
        handleActiveIndex!(index)
        navigate(url)
    }

    return (
        <div style={{position:'fixed',top:0, left:0}}>
            <Button icon={'pi pi-table'} onClick={handleShowSideBar} text style={{position:'absolute', marginTop:'5px'}}/>
            <main className={`${styles.sidebarContainer} ${isSideBarShow ? styles.show : styles.hide}`}>
                <div className={styles.containerBtn}>
                    <Button icon={'pi pi-table'} onClick={handleShowSideBar} text/>
                </div>
                <ul className={styles.OptSideBarContainer}>
                    {optionsSidebar.map((option, index) => (
                        <li className={`${styles.optSideBar} ${optActiveInSidebar === index ? styles.selected : ''}`}
                            key={index} onClick={() => handleClick(index,option.url!)}>
                            <span className={option.icon}/>
                            <span>{option.label}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}
