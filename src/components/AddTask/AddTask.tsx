import {InputText} from "primereact/inputtext";
import styles from "./AddTask.module.css";
import {Button} from "primereact/button";
import {useSidebar} from "../../hooks/useSidebar.ts";
import {SyntheticEvent, useEffect, useRef} from "react";
import {OverlayPanel} from "primereact/overlaypanel";
import {Calendar} from "../Calendar/Calendar.tsx";

export const AddTask = () => {
    const {optActiveInSidebar,handleActiveIndex} = useSidebar()
    const addTaskContainer = useRef<HTMLDivElement>(null)
    const calendarRef = useRef<OverlayPanel>(null)
    const handleClickOutside = (e:MouseEvent) => {
        if(calendarRef.current && !calendarRef.current.getElement()?.contains(e.target as Node)){
            if (addTaskContainer.current && !addTaskContainer.current.contains(e.target as Node)) {
                if (calendarRef.current && calendarRef.current.getElement()?.contains(e.target as Node)) {
                    return;
                }
                else if (calendarRef.current.isVisible()) {
                    calendarRef.current.hide();
                } else {
                    handleActiveIndex!(-1);
                }
            }
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        };
    }, []);
    const showOverlayPanel = (event: SyntheticEvent) => {
        if (calendarRef.current) {
            calendarRef.current?.toggle(event);
        }
    };
    return (
        optActiveInSidebar === 0 &&
        <div className={styles.overlay}>
            <main className={styles.containerAddTask} ref={addTaskContainer}>
                <div className={styles.contentAddTask}>
                    <InputText className={styles.inpAddTask} placeholder={'Name of the task'} />
                    <InputText className={styles.inpAddTask} placeholder={'Description'} />
                    <div>
                        <Button icon={'pi pi-calendar'} label={'Due Date'} className={styles.dueDateBtn} outlined
                                severity={'secondary'} onClick={(event) => {
                                    showOverlayPanel(event)}}
                        />
                        <Calendar ref={calendarRef}/>
                    </div>
                    <div className={styles.containerAddTaskBtn}>
                        <Button label={'Cancel'} outlined className={styles.btn} onClick={() => handleActiveIndex!(-1)}/>
                        <Button label={'Add Task'} className={styles.btn} />
                    </div>
                </div>
            </main>
        </div>
    )
}