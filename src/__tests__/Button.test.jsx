import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { describe, expect, test } from "vitest";

import Button from "@/components/common/Button/Button.component.jsx";

describe("Button", () => {
    test("renders", () => {
        const { getByTestId, debug } = render(<Button label="label" />);
        // debug(); // shows html in terminal
        expect(getByTestId("button")).toBeDefined();
    });
    test("displays label props", () => {
        const { getByText } = render(<Button label="label" />);
        expect(getByText("label")).toBeInTheDocument();
    });
    test("triggers onClick event handler when clicked", () => {
        const handleClick = vi.fn();
        const { getByTestId } = render(
            <Button label="label" onClick={handleClick} />,
        );
        fireEvent.click(getByTestId("button"));
        expect(handleClick).toHaveBeenCalled();
    });
    test("displays svg", () => {
        const { getByTestId, debug } = render(<Button svg label="label" />);
        expect(getByTestId("svg")).toBeInTheDocument();
    });
    test("different size", () => {
        const { getByTestId, debug } = render(
            <Button size="small" label="label" />,
        );
        const button = getByTestId("button");
        expect(button.className.includes("small")).toBe(true);
    });
});
