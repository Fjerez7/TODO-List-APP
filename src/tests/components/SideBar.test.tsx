import {describe, expect, test} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {SideBar} from "../../components/SideBar/SideBar.tsx";
import styles from '../../components/SideBar/SideBar.module.css'
import {MemoryRouter} from "react-router-dom";
import {SideBarProvider} from "../../context/SideBarContext.tsx";

const optionsSidebar= [
    {label: 'Add Task', icon: 'pi pi-plus-circle'},
    {label: 'Search', icon: 'pi pi-search'},
    {label: 'Today', icon: 'pi pi-calendar-times',url:'today'},
    {label: 'Upcoming', icon: 'pi pi-calendar',url:'/upcoming'},
]

describe("SideBar component", () => {
    test("should render SideBar component without crashing", () => {
        render(
            <SideBarProvider>
                <MemoryRouter>
                    <SideBar />
                </MemoryRouter>
            </SideBarProvider>
        );
        optionsSidebar.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        })
    });

    test('changes selected item on click', () => {
        render(
            <SideBarProvider>
                <MemoryRouter>
                    <SideBar />
                </MemoryRouter>
            </SideBarProvider>
        );
        const items = document.querySelectorAll("li");
        expect(items).toHaveLength(optionsSidebar.length)

        fireEvent.click(items[0]);
        expect(items[0]).toHaveClass(styles.selected);

        fireEvent.click(items[1]);
        expect(items[1]).toHaveClass(styles.selected);
        expect(items[0]).not.toHaveClass(styles.selected);
    });
});