import {describe, expect, it} from "vitest";
import {render} from "@testing-library/react";
import {Inbox} from "../../pages/Inbox/Inbox.tsx";


describe("Inbox", () => {
    it("should render the Inbox page", () => {
        render(<Inbox />);

        expect(document.querySelector('h1')?.textContent).toBe("Inbox");
    });
})