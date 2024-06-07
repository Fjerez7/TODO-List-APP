import {describe, expect, test} from "vitest";
import {render,screen} from "@testing-library/react";
import {AddTask} from "../../components/AddTask/AddTask.tsx";
import {SideBarProvider} from "../../context/SideBarContext.tsx";


describe("AddTask Component", () => {
    test("should render AddTask component without crashing", () => {
        render(<SideBarProvider><AddTask/></SideBarProvider>)
        expect(screen.findByPlaceholderText('Name of the task'));
        expect(screen.findByPlaceholderText('Description'));
        expect(screen.findByText('Due Date'))
        expect(screen.findByText('Cancel'))
        expect(screen.findByText('Add Task'))
    });
});