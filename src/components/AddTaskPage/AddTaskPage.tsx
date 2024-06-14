import {FC, SyntheticEvent, useRef, useState} from "react";
import {OverlayPanel} from "primereact/overlaypanel";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Calendar} from "../Calendar/Calendar.tsx";
import styles from "./AddTaskPage.module.css";

interface AddTaskPageProps {
    showModal?: boolean;
    onClose?: () => void;
}


export const AddTaskPage:FC<AddTaskPageProps> = ({showModal,onClose}) => {
    const calendarRef = useRef<OverlayPanel>(null);
    const [dueDate, setDueDate] = useState<string | null>(null);

    const showOverlayPanel = (event: SyntheticEvent) => {
        if (calendarRef.current) {
            calendarRef.current?.toggle(event);
        }
    };

    const handleDateSelect = (date: string) => {
        setDueDate(date);
        if (calendarRef.current) {
            calendarRef.current.hide();
        }
    };

    return (
            showModal &&
            <div className={styles.contentAddTask}>
                <InputText className={styles.inpAddTask} placeholder={'Name of the task'} />
                <InputText className={styles.inpAddTask} placeholder={'Description'} />
                <Button
                    icon={'pi pi-calendar'}
                    label={dueDate ? `${dueDate}` : 'Due Date'}
                    className={styles.dueDateBtn}
                    outlined
                    severity={'secondary'}
                    onClick={(event) => {
                        showOverlayPanel(event);
                    }}
                />
                <Calendar ref={calendarRef} onDateSelect={handleDateSelect} />
                <div className={styles.containerAddTaskBtn}>
                    <Button
                        label={'Cancel'}
                        outlined
                        className={styles.btn}
                        onClick={() => {
                            setDueDate(null);
                            onClose && onClose();
                        }}
                    />
                    <Button label={'Add Task'} className={styles.btn} />
                </div>
            </div>
    );
};