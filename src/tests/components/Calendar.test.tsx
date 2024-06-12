import {describe, expect, it, vi} from "vitest";
import {act, fireEvent, render, screen,} from "@testing-library/react";
import {Calendar} from "../../components/Calendar/Calendar.tsx";
import {createRef, SyntheticEvent} from "react";
import {OverlayPanel} from "primereact/overlaypanel";
import {userEvent} from "@testing-library/user-event";


describe("Calendar", () => {
    const calendarRef = createRef<OverlayPanel>()
    it("should render the calendar", () => {
        const {container} = render(<Calendar onDateSelect={vi.fn()} ref={calendarRef} />);
        const event = { target: container.firstChild } as unknown as SyntheticEvent;
        act(() => {
            calendarRef.current!.toggle(event);
        });
        expect(container).toBeInTheDocument()
        expect(screen.getByRole('button',{name: 'Apply'})).toBeInTheDocument();
    });
    it('should call onDateSelect with formatted date when date is selected', async () => {
        const onDateSelect = vi.fn();
        const { container } = render(<Calendar onDateSelect={onDateSelect} ref={calendarRef} />);
        act(() => {
            calendarRef.current!.toggle({ target: container.firstChild } as unknown as SyntheticEvent);
        });
        const calendarButton = document.querySelector('#date-picker') as HTMLDivElement;
        fireEvent.click(calendarButton);

        const dayButton = screen.getByText('11');
        fireEvent.click(dayButton);

        await userEvent.click(screen.getByRole('button', { name: 'Apply' }));

        const date = new Date();
        date.setDate(11);

        const datePart1 = date.toDateString().split(' ').slice(1, 3).join(' ');
        const datePart2 = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const expectedDate = `${datePart1} ${datePart2}`;
        expect(onDateSelect).toHaveBeenCalled();
        expect(onDateSelect).toHaveBeenCalledWith(expectedDate);
    });
});