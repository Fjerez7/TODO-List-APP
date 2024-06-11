import {describe, expect, it, vi} from "vitest";
import { render, screen, waitFor} from "@testing-library/react";
import {AddTask} from "../../components/AddTask/AddTask.tsx";
import {SideBarProvider} from "../../context/SideBarContext.tsx";
import * as useSidebarHook from "../../hooks/useSidebar.ts";
import {userEvent} from "@testing-library/user-event";
import styles from '../../components/Calendar/Calendar.module.css'

describe("AddTask Component", () => {
    const useSidebarSpy = vi.spyOn(useSidebarHook, 'useSidebar');
    useSidebarSpy.mockReturnValue({
        isSideBarShow: true,
        handleShowSideBar: vi.fn(),
        optActiveInSidebar: 0,
        handleActiveIndex: vi.fn()
    });
    it("should render AddTask component without crashing", () => {
        render(
            <SideBarProvider>
                <AddTask/>
            </SideBarProvider>
        )
        expect(screen.getByPlaceholderText('Name of the task')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
        expect(screen.getByText('Due Date')).toBeInTheDocument()
        expect(screen.getByText('Add Task')).toBeInTheDocument()
        expect(screen.getByText('Cancel')).toBeInTheDocument()
    });
    it('should display the calendar when the Due Date button is clicked',async () => {
        render(
            <SideBarProvider>
                <AddTask/>
            </SideBarProvider>
        )
        const dueDateBtn = screen.getByRole('button', {name: 'Due Date'})
        await userEvent.click(dueDateBtn)
        await waitFor(() => {
            const calendar = document.querySelectorAll(`.${styles.containerCalendar}`)
            expect(calendar[0]).toBeInTheDocument()
            expect(screen.getByText('Apply')).toBeInTheDocument()
        })
    });
    it('hides calendar and resets Due Date Btn on outside click',async () => {
        render(
            <SideBarProvider>
                <AddTask/>
            </SideBarProvider>
        )
        const dueDateBtn = screen.getByRole('button', {name: 'Due Date'})
        await userEvent.click(dueDateBtn)
        const outsideElement = document.createElement('div')
        document.body.appendChild(outsideElement)
        await userEvent.click(outsideElement)
        await waitFor(() => {
            const calendar = document.querySelectorAll(`.${styles.containerCalendar}`)
            expect(calendar.item(0)).not.toBeInTheDocument()
            expect(screen.getByText('Due Date')).toBeInTheDocument()
        })
    })
});