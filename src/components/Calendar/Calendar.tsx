import {OverlayPanel} from "primereact/overlaypanel";
import {Calendar as CalendarPrime} from "primereact/calendar";
import {forwardRef, useState} from "react";
import styles from "./Calendar.module.css";

export const Calendar = forwardRef<OverlayPanel>(
    (props, ref) => {
        const [date, setDate] = useState<Date>(new Date());
        console.log(date)
    return (
        <OverlayPanel ref={ref} className={styles.containerCalendar}>
            <div></div>
            <div>

                <CalendarPrime inline className={styles.calendar} value={date}
                               onChange={(e) => setDate(e.value!)}
                />
            </div>
            <CalendarPrime timeOnly/>
        </OverlayPanel>
    );
});