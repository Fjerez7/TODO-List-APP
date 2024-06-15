import {describe, expect, it, vi} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import {AddTaskPage} from "../../components/AddTaskPage/AddTaskPage.tsx";
import {userEvent} from "@testing-library/user-event";
import styles from "../../components/Calendar/Calendar.module.css";


describe('AddTaskPage', () => {
    it('should render AddTaskPage when showModal prop is true', () => {
        render(<AddTaskPage showModal={true} />)

        expect(screen.getByPlaceholderText('Name of the task')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
        expect(screen.getByText('Due Date')).toBeInTheDocument()
        expect(screen.getByText('Cancel')).toBeInTheDocument()
        expect(screen.getByText('Add Task')).toBeInTheDocument()
    });
    it('should not render AddTaskPage cuz showModal prop is false', () => {
        const {container} = render(<AddTaskPage showModal={false} />)

        expect(container.firstChild).not.toBeInTheDocument()
    });
    it('should display calendar when Due Date button is clicked', async () => {
        render(<AddTaskPage showModal={true} />)

        const dueDateBtn = screen.getByText('Due Date')
        await userEvent.click(dueDateBtn)
        await waitFor(() => {
            const calendar = document.querySelectorAll(`.${styles.containerCalendar}`)
            expect(calendar[0]).toBeInTheDocument()
            expect(screen.getByText('Apply')).toBeInTheDocument()
        })
    })
    it('should calls onclose when cancel btn is clicked', async () => {
        const handleOnClose = vi.fn()
        render(<AddTaskPage showModal={true} onClose={handleOnClose} />)

        const cancelBtn = screen.getByText('Cancel');
        await userEvent.click(cancelBtn)
        expect(handleOnClose).toHaveBeenCalledTimes(1)
    });
});