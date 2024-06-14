import {describe, expect, it} from "vitest";
import {render} from "@testing-library/react";
import {Today} from "../../pages/Today/Today.tsx";
import styles from "../../pages/Today/Today.module.css";

describe("Today Page", () => {
    it('should render Today page with their objects ', () => {
        render(<Today/>);

        expect(document.querySelector('h1')?.textContent).toBe('Today');
        expect(document.querySelector('span')?.className).toBe(`pi pi-plus ${styles.iconAdd}`);
        expect(document.querySelector('p')?.textContent).toBe('Add Task');
    });
});