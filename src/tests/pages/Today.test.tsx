import {describe, expect, it, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import {Today} from "../../pages/Today/Today.tsx";
import styles from "../../pages/Today/Today.module.css";
import {userEvent} from "@testing-library/user-event";

vi.mock('../../components/AddTaskPage/AddTaskPage.tsx', () => ({
    AddTaskPage: vi.fn(({showModal,onClose}) => (
        showModal ? (
            <div>
                AddTaskPage Component
                <button onClick={onClose}>Cancel</button>
            </div>
        ): null
    ))
}))

describe("Today Page", () => {
    it('should render Today page with addTask btn ', () => {
        render(<Today/>);

        expect(document.querySelector('h1')?.textContent).toBe('Today');
        expect(document.querySelector('span')?.className).toBe(`pi pi-plus ${styles.iconAdd}`);
        expect(document.querySelector('p')?.textContent).toBe('Add Task');
    });
    it('should open addTaskPage modal when AddTask btn is clicked', async () => {
        render(<Today/>);
        const addTaskBtn = screen.getByText('Add Task');
        await userEvent.click(addTaskBtn);
        expect(screen.getByText('AddTaskPage Component')).toBeInTheDocument();
    });
    it('should close addTaskPage modal when onClose is called', async () => {
        render(<Today/>);

        const addTaskBtn = screen.getByText('Add Task');
        await userEvent.click(addTaskBtn);
        expect(screen.getByText('AddTaskPage Component')).toBeInTheDocument();

        const cancelButton = screen.getByRole('button', {name: 'Cancel'});
        await userEvent.click(cancelButton);
        expect(screen.queryByText('AddTaskPage Component')).not.toBeInTheDocument();
    });
});