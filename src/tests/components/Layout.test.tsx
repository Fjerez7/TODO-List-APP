import {describe, expect, test} from "vitest";
import {render} from "@testing-library/react";
import {Layout} from "../../components/Layout/Layout.tsx";


describe("Layout component", () => {
   test("should render Layout component without crashing", () => {
       render(<Layout children={<div></div>} />);
       const layout = document.querySelector('div');
       expect(layout).toBeInTheDocument();
   });
});