import {OverlayPanel} from "primereact/overlaypanel";
import {Calendar as CalendarPrime} from "primereact/calendar";
import {forwardRef} from "react";
import styles from "./Calendar.module.css";
import {Button} from "primereact/button";
import {Controller, useForm} from "react-hook-form";

type FormData = {
    date: Date | null;
}
interface CalendarProps {
    onDateSelect: (date: string) => void;
}

export const Calendar = forwardRef<OverlayPanel,CalendarProps>(
    ({onDateSelect}, ref) => {
        const {control, handleSubmit} = useForm<FormData>({
            defaultValues: {
                date: null
            }
        });
        const onSubmit = (data:FormData) => {
            if (data.date) {
                const datePart1 = data.date.toDateString().split(' ').slice(1, 3).join(' ');
                const datePart2 = data.date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
                const dateFormatted = `${datePart1} ${datePart2}`;
                onDateSelect(dateFormatted);
            }
        }
    return (
        <OverlayPanel ref={ref} className={styles.containerCalendar}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name={'date'}
                    control={control}
                    render={({field}) => (
                        <CalendarPrime inline className={styles.calendar} value={field.value} showTime hourFormat={'12'}
                                       onChange={(e) => field.onChange(e.value!)}
                                       panelClassName={styles.timePanel} dateFormat={'MM/dd/yy'}
                        />
                    )}
                />
                <Button label="Apply" type={'submit'} className={styles.applyButton}/>
            </form>
        </OverlayPanel>
    )
    });