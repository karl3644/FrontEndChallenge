import Text from "@/components/common/Text/Text.component.jsx";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Text", () => {
    test("renders correctly", () => {
        const { getByText } = render(<Text />);
        expect(getByText("Text")).toBeInTheDocument();
    });
    test("renders correct element type based on type prop", () => {
        const { getByTestId, getByText, rerender } = render(<Text type="p" />);
        expect(getByText("Text").tagName).toBe("P");

        rerender(<Text type="none" />);
        expect(getByTestId("notRendered")).toBeInTheDocument();

        rerender(<Text type="span" />);
        // 2 ways, either getByText, or getByTestId
        expect(getByText("Text").tagName).toBe("SPAN");
        expect(getByTestId("span")).toBeInTheDocument();

        rerender(<Text type="h1" />);
        expect(getByTestId("h1")).toBeInTheDocument();

        rerender(<Text type="h2" />);
        expect(getByTestId("h2")).toBeInTheDocument();

        rerender(<Text type="h3" />);
        expect(getByTestId("h3")).toBeInTheDocument();

        rerender(<Text type="h4" />);
        expect(getByTestId("h4")).toBeInTheDocument();

        rerender(<Text type="h5" />);
        expect(getByTestId("h5")).toBeInTheDocument();

        rerender(<Text type="a" />);
        expect(getByTestId("a")).toBeInTheDocument();
    });
    test("applies active class when active prop is true", () => {
        const { getByTestId, rerender } = render(<Text />);
        expect(getByTestId("default").className.includes("active")).toBe(false);

        rerender(<Text active />);
        expect(getByTestId("default").className.includes("active")).toBe(true);
    });
    test("applies cardHeading class when cardHeading prop is true", () => {
        const { getByTestId, rerender, debug } = render(<Text type="span" />);
        expect(getByTestId("span").className.includes("cardHeading")).toBe(
            false,
        );

        rerender(<Text type="span" cardHeading />);
        expect(getByTestId("span").className.includes("cardHeading")).toBe(
            true,
        );
    });
    test("applies cardText class when cardText prop is true", () => {
        const { getByTestId, rerender, debug } = render(<Text type="h1" />);
        expect(getByTestId("h1").className.includes("cardText")).toBe(false);

        rerender(<Text type="h1" cardText />);
        expect(getByTestId("h1").className.includes("cardText")).toBe(true);
    });
});
