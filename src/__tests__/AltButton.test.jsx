import AltButton from "@/components/common/AltButton/AltButton.component.jsx";
import { describe, expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("AltButton", () => {
    test("renders", () => {
        const { getByTestId, debug } = render(<AltButton />);
        // debug();
        expect(getByTestId("altButton")).toBeInTheDocument();
    });
    test("triggers onClick event handler when clicked", () => {
        // arrange
        const handleClick = vi.fn();
        const { getByTestId } = render(<AltButton onClick={handleClick} />);
        // act
        fireEvent.click(getByTestId("altButton"));
        // assert
        expect(handleClick).toHaveBeenCalled();
    });
    test("applies styles from buttonStyle prop", () => {
        // arrange
        const { getByTestId, rerender } = render(
            <AltButton buttonStyle={{ border: "1px red solid" }} />,
        );
        // act
        // assert
        expect(getByTestId("altButton")).toHaveStyle({
            border: "1px red solid",
        });

        rerender(<AltButton buttonStyle={{ padding: "8px" }} />);
        expect(getByTestId("altButton")).toHaveStyle({
            padding: "8px",
        });
    });
    test("does not trigger onClick event when disabled", () => {
        // arrange
        const handleClick = vi.fn();
        const { getByTestId } = render(
            <AltButton onClick={handleClick} disabled />,
        );
        // act
        fireEvent.click(getByTestId("altButton"));
        // assert
        expect(handleClick).not.toHaveBeenCalled();
    });
    test("renders different icon based on type prop", () => {
        const { getByTestId, rerender } = render(<AltButton type="navLeft" />);
        expect(getByTestId("navLeft")).toBeInTheDocument();

        rerender(<AltButton type="navRight" />);
        expect(getByTestId("navRight")).toBeInTheDocument();

        rerender(<AltButton type="add" />);
        expect(getByTestId("add")).toBeInTheDocument();

        rerender(<AltButton type="play" />);
        expect(getByTestId("play")).toBeInTheDocument();
    });
    test("renders different sizes based on size prop", () => {
        const { getByTestId, rerender } = render(<AltButton />);
        const altButton = getByTestId("altButton");

        expect(altButton.className.includes("medium")).toBe(true);

        rerender(<AltButton size="small" />);
        expect(altButton.className.includes("small")).toBe(true);
    });
});
