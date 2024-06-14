import {describe, expect, it} from "vitest";
import {render} from "@testing-library/react";
import {Upcoming} from "../../pages/Upcoming/Upcoming.tsx";


describe("Upcoming Page", () => {
    it('should render Upcoming page', () => {
        render(<Upcoming/>);

        expect(document.querySelector('h1')?.textContent).toBe('Upcoming');
    });
});