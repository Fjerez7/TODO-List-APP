import {describe, expect, test} from "vitest";
import App from "../App";
import {render, screen, within} from "@testing-library/react";
import {SideBarProvider} from "../context/SideBarContext.tsx";


describe("App component", () => {
    const optionsSidebar= [
        {label: 'Add Task', icon: 'pi pi-plus-circle',},
        {label: 'Search', icon: 'pi pi-search'},
        {label: 'Today', icon: 'pi pi-calendar-times'},
        {label: 'Upcoming', icon: 'pi pi-calendar'},
    ]
    test("render App component without crashing", () => {
        render(
            <SideBarProvider>
                <App/>
            </SideBarProvider>
        );
        const sidebar = screen.getByRole('main');
        optionsSidebar.forEach(option => {
            const elements = within(sidebar).getAllByText(option.label);
            elements.forEach(element => {
                expect(element).toBeInTheDocument();
            });
        });
    })
})